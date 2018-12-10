<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">尺寸</th>
                    <th scope="col">价格</th>
                    <th scope="col">加入</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in getMenuItems" :key="index">
                    <tr>
                    <td>{{item.name}}</td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="index">
                    <td>{{option.size}}</td>
                    <td>{{option.price}}</td>
                    <td>
                        <button class="btn btn-sm btn-info" @click="addToBasket(item, option)">+</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-sm-12 col-md-4" v-if="this.baskets.length > 0">
        <table class="table">
            <thead class="thead-default">
            <tr>
                <th>数量</th>
                <th>品种</th>
                <th>价格</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(basket, index) in baskets" :key="index">
                <td>
                <button @click="removeOneQuantity(basket)" class="btn btn-sm">-</button>
                <span>{{basket.quantity}}</span>
                <button @click="addOneQuantity(basket)" class="btn btn-sm">+</button>
                </td>
                <td>{{basket.name}}{{basket.size}}</td>
                <td>{{basket.price * basket.quantity}}</td>
            </tr>
            </tbody>
        </table>
        <p>总价：{{sumPrice}}RMB</p>
        <button class="btn btn-success btn-block">提交</button>
        </div>
        <p v-else>没有添加任何商品</p>
    </div>
    
    
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      baskets: []
    };
  },
  methods: {
    addToBasket(item, option) {
      let newBasket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.baskets.length > 0) {
        let result = this.baskets.filter(basket => {
          return basket.name === item.name && basket.price === option.price;
        });
        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(newBasket);
        }
      } else {
        this.baskets.push(newBasket);
      }
    },
    addOneQuantity(basket) {
      basket.quantity++;
    },
    removeOneQuantity(basket) {
      basket.quantity--;
      if (basket.quantity <= 0) {
        this.removeBasket(basket);
      }
    },
    removeBasket(basket) {
      this.baskets.splice(this.baskets.indexOf(basket), 1);
    }
  },
  computed: {
    getMenuItems() {
      return this.$store.getters.getMenuItems;
    },
    sumPrice() {
      let sum = 0;
      this.baskets.forEach(basket => {
        sum += basket.price * basket.quantity;
      });
      return sum;
    }
  },
  created() {
    axios.get("menu.json").then(res => {
      this.$store.commit("setMenuItems", res.data)
    });
  }
};
</script>
