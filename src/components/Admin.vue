<template>
    <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" :key="index">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPrzza from "./NewPizza.vue";
import axios from 'axios'
export default {
  data() {
    return {
      // getMenuItems: []
    };
  },
  computed: {
    getMenuItems() {
      return this.$store.getters.getMenuItems;
    }
  },
  components: {
    "app-new-pizza": NewPrzza
  },
  methods: {
    //   deleteData(item){
    //     fetch("https://wd1564806050jvgoba.wilddogio.com/"+item.id+"/.json",{
    //       method:"DELETE",
    //       headers:{
    //         'Content-type':'application/json'
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(data => this.$router.push({name:"adminLink"}))
    //     .catch(err => console.log(err))
    //   }
    deleteData(item) {
        
        axios.delete("menu/"+ item.id +".json")
        .then(res => {
          this.$store.commit("removeMenuItem", item);
            // console.log('success')
            // this.$router.push({name: "menuLink"})
        })
    }
  },
  created() {
    axios
      .get("menu.json")
      .then(res => {
        return res.data;
      })
      .then(datas => {
        let menuArray = [];
        for (let data in datas) {
          datas[data].id = data;
          menuArray.push(datas[data]);
        }
        
        this.$store.commit('setMenuItems', menuArray);
      });
  }
};
</script>

