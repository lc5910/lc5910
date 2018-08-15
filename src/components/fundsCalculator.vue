<template>
    <div>
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm">
            <el-form-item prop="cost" class='inputText' label='申购金额(元)'>
                <el-input v-model="dataForm.cost"  type="text" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="productType" label='产品类型'>
                <el-select v-model="dataForm.productType"  @change='ptChange'>
                    <el-option v-for="(item,index) in productType" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="costServerCharge" label='申购续费(%)'>
                <el-input v-model="dataForm.costServerCharge"  type="text" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="upRate" label='涨跌比率(%)'>
                <el-input v-model="dataForm.upRate"  type="text" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="redeemServerCharge" label='赎回续费(%)'>
                <el-input v-model="dataForm.redeemServerCharge"  type="text" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="redeem" label='赎回金额(元)'>
                <el-input v-model="dataForm.redeem" type="text" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="serverCharge" label='总手续费(元)'>
                <el-input v-model="dataForm.serverCharge" type="text" maxlength="11" disabled></el-input>
            </el-form-item>
            <el-form-item prop="earnings" label='累计收益(元)'>
                <el-input v-model="dataForm.earnings" type="text" maxlength="11" disabled></el-input>
            </el-form-item>
            <el-form-item  class='submitBox'>
                <el-button class="btn-submit" type="primary" size='medium' @click="dataFormSubmit(1)" :class='activeCal==1?"active":""'>计算收益</el-button>
                <el-button class="btn-submit" type="primary" size='medium' @click="dataFormSubmit(2)" :class='activeCal==2?"active":""'>反算本金</el-button>
                <el-button class="btn-submit" type="primary" size='medium' @click="dataFormSubmit(3)" :class='activeCal==3?"active":""'>反算涨跌</el-button>
                <el-button class="btn-submit" type="primary" size='medium' @click="resetForm('dataForm')">重置数据</el-button>
            </el-form-item>
        </el-form>
        <ul class="tips">
            <li v-for="(item,index) in tips" :key='index'>{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 表单数据
                dataForm: {
                    cost: '',
                    productType: '0',
                    costServerCharge: '',
                    upRate: '',
                    redeemServerCharge: '',
                    redeem: '',
                    serverCharge: '',
                    earnings: '',
                },
                // 校验规则
                dataRule: {
                    cost: [
                        { validator: this.moneyRule, trigger: 'blur' }
                    ],
                    productType: [
                        { validator: this.requiredRule, trigger: 'blur' }
                    ],
                    costServerCharge: [
                        { validator: this.moneyRule2, trigger: 'blur' }
                    ],
                    upRate: [
                        { validator: this.moneyRule, trigger: 'blur' }
                    ],
                    redeemServerCharge: [
                        { validator: this.moneyRule2, trigger: 'blur' }
                    ],
                    redeem: [
                        { validator: this.moneyRule, trigger: 'blur' }
                    ],
                },
                productType:[
                    {label:'指数C',value:'0',costServerCharge:0, redeemServerCharge:0},
                    {label:'指数A',value:'1',costServerCharge:0.1, redeemServerCharge:0.3},
                    {label:'混合型',value:'2',costServerCharge:0.15, redeemServerCharge:0.5},
                ],
                activeCal:1,   // 当前计算的按钮
                tips:['提示：', '1、计算可能会有±0.01元的误差。', '2、切换产品类型才会自动计算结果。'],
            }
        },
        created() {
            this.init();
        },
        mounted() {
            
        },
        methods: {
            // 初始化
            init(){
                this.dataForm = {
                    cost: '10000',
                    productType: '0',
                    costServerCharge: '0',
                    upRate: '5',
                    serverCharge: '',
                    redeemServerCharge: '0',
                    redeem: '',
                    earnings: '',
                }
            },
            // 提交表单
            dataFormSubmit (num) {
                // this.updateLoading(true);
                // this.updateLoading(false);
                this.activeCal=num;
                //去除空格
                for(var val in this.dataForm ){
                    this.dataForm[val] = this.dataForm[val].toString().trim();
                }
                this.$refs['dataForm'].validate((valid) => {
                    if (!valid) {  
                        return;
                    }
                    if(num===1){
                        this.calEarnings();
                    }else if(num===2){
                        this.calCost();
                    }else if(num===3){
                        this.calUpRate();
                    }
                });
            },
            // 金额校验-非必输字段
            moneyRule(rule, value, callback){
                if (/^\-?\d+(\.\d+)?$/.test(value)) {
                    callback();
                }else if(value){
                    callback(new Error('请输入正确的数字'));
                }else{
                    callback();
                }
            },
            // 金额校验-必输字段
            moneyRule2(rule, value, callback){
                if (/^\-?\d+(\.\d+)?$/.test(value)) {
                    callback();
                }else{
                    callback(new Error('请输入正确的数字'));
                }
            },
            // 必输入字段
            requiredRule(rule, value, callback){
                if (value.length==0) {
                    callback(new Error('请输入该字段'));
                }else{
                    callback();
                }
            },
            // 重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.init();
                this.activeCal = 1;
            },
            // 产品类型切换
            ptChange(val){
                val = val || 0;
                this.dataForm.costServerCharge = this.productType[val].costServerCharge;
                this.dataForm.redeemServerCharge = this.productType[val].redeemServerCharge;
                this.$nextTick(()=>{
                    this.dataFormSubmit(this.activeCal);
                });
            },
            // 计算收益
            calEarnings(){
                if(this.dataForm.cost===''){
                    this.$message({ type:'warning', message: '请输入申购金额',duration:2000});
                    return;
                }else if(this.dataForm.upRate===''){
                    this.$message({ type:'warning', message: '请输入涨跌比率',duration:2000});
                    return;
                }
                let cost=parseFloat(this.dataForm.cost);
                let costServerCharge=parseFloat(this.dataForm.costServerCharge);
                let upRate=parseFloat(this.dataForm.upRate);
                let redeemServerCharge=parseFloat(this.dataForm.redeemServerCharge);
                // 赎回金额
                this.dataForm.redeem   = gage.toFixed2(cost*(1-costServerCharge/100)*(1+upRate/100)*(1-redeemServerCharge/100));
                // 总手续费
                let sum = gage.toFixed2(cost*costServerCharge/100+cost*(1-costServerCharge/100)*(1+upRate/100)*redeemServerCharge/100);
                if(sum!==''){
                    this.dataForm.serverCharge = gage.toFixed2(cost*costServerCharge/100) +' + '+ gage.toFixed2(cost*(1-costServerCharge/100)*(1+upRate/100)*redeemServerCharge/100) + ' = ' + sum;
                }else{
                    this.dataForm.serverCharge = '';
                }
                // 累计收益
                this.dataForm.earnings = gage.toFixed2(cost*(1-costServerCharge/100)*(1+upRate/100)*(1-redeemServerCharge/100)-cost);
            },
            // 反算本金
            calCost(){
                if(this.dataForm.redeem===''){
                    this.$message({ type:'warning', message: '请输入赎回金额',duration:2000});
                    return;
                }else if(this.dataForm.upRate===''){
                    this.$message({ type:'warning', message: '请输入涨跌比率',duration:2000});
                    return;
                }
                let costServerCharge=parseFloat(this.dataForm.costServerCharge);
                let upRate=parseFloat(this.dataForm.upRate);
                let redeemServerCharge=parseFloat(this.dataForm.redeemServerCharge);
                let redeem=parseFloat(this.dataForm.redeem);
                let cost = redeem/(1-redeemServerCharge/100)/(1+upRate/100)/(1-costServerCharge/100);
                if(/\.99/.test(cost)){
                    cost=Math.ceil(cost);
                }
                // 本金
                this.dataForm.cost = gage.toFixed2(cost);
                this.calResult(cost,costServerCharge,upRate,redeemServerCharge);
            },
            // 反算涨跌
            calUpRate(){
                if(this.dataForm.cost===''){
                    this.$message({ type:'warning', message: '请输入申购金额',duration:2000});
                    return;
                }else if(this.dataForm.redeem===''){
                    this.$message({ type:'warning', message: '请输入赎回金额',duration:2000});
                    return;
                }
                let cost=parseFloat(this.dataForm.cost);
                let costServerCharge=parseFloat(this.dataForm.costServerCharge);
                let redeemServerCharge=parseFloat(this.dataForm.redeemServerCharge);
                let redeem=parseFloat(this.dataForm.redeem);
                let upRate = (redeem/(cost*(1-costServerCharge/100)*(1-redeemServerCharge/100))-1)*100;
                // 涨跌
                this.dataForm.upRate = gage.toFixed2(upRate);
                this.calResult(cost,costServerCharge,upRate,redeemServerCharge);
            },
            // 计算手续费和累计收益
            calResult(cost,costServerCharge,upRate,redeemServerCharge){
                // 总手续费
                let sum = gage.toFixed2(cost*costServerCharge/100+cost*(1-costServerCharge/100)*(1+upRate/100)*redeemServerCharge/100);
                if(sum!==''){
                    this.dataForm.serverCharge = gage.toFixed2(cost*costServerCharge/100) +' + '+ gage.toFixed2(cost*(1-costServerCharge/100)*(1+upRate/100)*redeemServerCharge/100) + ' = ' + sum;
                }else{
                    this.dataForm.serverCharge = '';
                }
                // 累计收益
                this.dataForm.earnings = gage.toFixed2(cost*(1-costServerCharge/100)*(1+upRate/100)*(1-redeemServerCharge/100)-cost);
            }
        },
    }
</script>

<style lang="less" scoped>
    .tips{
        margin: 0.5rem 0;
        li{
            font-size: 0.3rem;
            color:#666;
            line-height: 2;
        }
    }
</style>
<style lang="less">
    .btn-submit{
        &.active{
            color: #f2f277;
        }
    }
    .tips{
        margin: 0.5rem 0;
        li{
            font-size: 0.3rem;
            color:#666;
            line-height: 2;
        }
    }
</style>