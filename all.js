Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        filterProduct:[],
        products:[{"path":"1-1-1.png","stock":1480,"name":"【Sp house】迷人風采全真牛皮金屬男士自動扣腰帶(","btype":"流行皮件","note":"男性必備經典不敗","mtype":"腰帶","spec":"金色,黑色","buy":2980,"number":"6518672"},{"path":"1-1-2.png","stock":1480,"name":"【Sp house】魅力時尚全真牛皮針扣式女用腰帶","btype":"流行皮件","note":"經典品味優雅的設計風格","mtype":"腰帶","spec":"黑色,白色,紅色","buy":2980,"number":"6518692"},{"path":"2-1.png","stock":1780,"name":"【Ocleather】個性女伶全真牛皮手工馬丁靴","btype":"流行鞋區","note":"全真牛皮製作柔軟舒適透氣吸汗","mtype":"流行女鞋","spec":"黑色,白色,紅色","buy":3980,"number":"6542829"},{"path":"637376680794230000.jpg","stock":1680,"name":"【Taroko】簡單人生純色舒適真牛皮平底休閒鞋","btype":"流行鞋區","note":"符合人體工學設計穿著舒適","mtype":"經典男鞋","spec":"黑色","buy":2980,"number":"6607235"},{"path":"1-1-3.png","stock":1280,"name":"【Sp house】高雅貴婦全真牛皮閃亮百搭腰帶","btype":"流行皮件","note":"經典品味優雅的設計風格","mtype":"腰帶","spec":"黑色,白色,駝色","buy":3980,"number":"6746375"},{"path":"637456157476870000.jpg","stock":2480,"name":"【Taroko】手搓紋路男士真牛皮豆豆鞋","btype":"流行鞋區","note":"高品質製作柔軟舒適透氣","mtype":"經典男鞋","spec":"藍色,金色","buy":4980,"number":"6782202"},{"path":"1-2-1.png","stock":4980,"name":"【Sp house】14吋商務紳士全真牛皮斜背側肩男用手提包","btype":"流行皮件","note":"經典品味優雅的設計風格","mtype":"手提包","spec":"黑色","buy":6999,"number":"6981351"},{"path":"1-3-1.png","stock":4980,"name":"【Sp house】復古趨勢全真牛皮斜背側肩女用子母包","btype":"流行皮件","note":"女性必備經典不敗","mtype":"側背包","spec":"棕色","buy":6999,"number":"6981403"},{"path":"1-2-2.png","stock":1980,"name":"【Sp house】自由隨性全真牛皮斜背側肩男用包","btype":"流行皮件","note":"時尚色系美觀好配搭","mtype":"手提包","spec":"黑色","buy":3980,"number":"6981409"},{"path":"1-2-3.png","stock":1980,"name":"【Sp house】時尚拼接全真牛皮斜背側肩女用鍊條包","btype":"流行皮件","note":"經典品味優雅的設計風格","mtype":"側背包","spec":"藍色,金色","buy":3980,"number":"6981422"}],
        btype:[],
        mtype:[],
        filterType:'all',
    },
    watch: {
        filterType: function () {
            let vm=this;
            vm.filterProduct=[],
            vm.products.forEach(
                item=>{
                    if(item.btype === vm.filterType || item.mtype ===vm.filterType){
                        
                        vm.filterProduct.push(item)
                    }else if(vm.filterType === 'all'){
                        vm.filterProduct=[],
                        vm.filterProduct = vm.products
                    }
                }
            )
        },
    },


    methods: {
        // getApi() {
        //     axios
        //         .get('http://webtest.uniten.com.tw:8080/merchandise')
        //         .then(response => {
        //             this.products = response.data.products;
        //             console.log(response)
        //         })
        // }
        getData(){
         this.filterProduct = this.products
        },
        //建立大分類
        findBtype(){
            let a=[];
            this.products.forEach(
                item=>{
                    a.push(item.btype)
                }
            )
            this.btype=a.filter((item, index, array)=>{
                return array.indexOf(item) === index;
            })

        },
        //建立中分類
        findMType(){
            let a=[];
            this.products.forEach(      
                item=>{ 
                   if(item.btype === this.btype[0]){ 
                    a.push(item.mtype)
                   }          
                }
            )
            this.mtype=a.filter((item, index, array)=>{
                return array.indexOf(item) === index;
            })            
        },
        filter(item){
            console.log(item)
            this.filterType=item;
        },
        like(){
            alert('已加入我的最愛')
        },
        cart(){
            alert('已加入購物車')
        }
    },

    created() {
        // this.getApi();
        this.getData();
        this.findBtype();
        this.findMType();
    },


});