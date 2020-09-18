<template>
  <div class="manager">
    <nav-component fullname="manager" :style="employeeList ? colorEmployees : colorProducts "/>
    <div class="container-back">
        <h3>Regresar</h3>
        <router-link to="/home" class="btn-back"></router-link>
    </div>
    <button @click="clickPrev" class="btn-prev" :style="employeeList ? colorEmployees : colorProducts"></button>
    <EmployeeList v-if="employeeList" :users="users" />
    <ProductsList ref="ProductsList" v-if="productsList" :products="products"/>
    <button @click="clickNext" class="btn-next" :style="employeeList ? colorEmployees : colorProducts"></button>
    <div class="new-item">
        <h3>{{ employeeList ? 'Agregar trabajador' : 'Agregar producto' }}</h3>
        <button class="btn-new-item" @click="employeeList ? modalEmp=true : modalProd=true"></button>
    </div>
    <modal-employee v-if="modalEmp" @close="modalEmp=false" :addFunction="handleAddEmployee" :user="user" button="Agregar trabajador" />
    <modal-product v-if="modalProd" @close="modalProd=false" :addFunction="handleAddProduct" button="Agregar producto" />
    <div class="buttons">
        <button @click="showEmployees" class="btn-manager" :style="employeeList ? styleObj1 : 'none'">Trabajadores</button>
        <button @click="showProducts" class="btn-manager" :style="productsList ? styleObj2 : 'none'">Productos</button>
    </div>
  </div>
</template>

<script>
import { getEmployees, addEmployee } from '../controllers/users.js'
import { getProducts, addProduct } from '../controllers/products.js'

import NavComponent from './NavComponent.vue';
import EmployeeList from './EmployeeList.vue';
import ModalEmployee from './ModalEmployee.vue';
import ProductsList from './ProductsList.vue';
import ModalProduct from './ModalProduct.vue';

const token = 'qwerryuipuq';

export default {
  name: 'managerView',
  data() {
    return {
      modalEmp: false,
      modalProd: false,
      productsList: false,
      employeeList: true,
      users: [],
      user: {},
      styleObj1: {
        'background-color': '#00C7D4',
        'border': 'none',
      },
      styleObj2: {
        'background-color': '#FF5E53',
        'border': 'none',
      },
      colorEmployees: {
        'background-color': '#00C7D4',
      },
      colorProducts: {
        'background-color': '#FF5E53',
      },
      border: {
        'border': 'none'
      },
      products: [],
      product: {},
    };
  },
  props: {
  },
  components: {
    NavComponent,
    EmployeeList,
    ModalEmployee,
    ProductsList,
    ModalProduct,
  },
  mounted () {
    getEmployees(token)
      .then(response => (this.users = response))
    getProducts(token)
      .then(response => {
        console.log(response);
        return this.products = response
      })
  },
  methods: {
    handleAddEmployee(obj) {
      const objEmployee = {
        // Borrar luego el id
        _id: Math.random()*1000,
        email: obj.email,
        password: obj.password,
        role: {
          admin: obj.role === "Admin"
        }
      }
      addEmployee(token, objEmployee)
        .then(response => (this.users = [...this.users, response]))
        .then(this.modalEmp = false)
    },
    handleAddProduct(obj) {
      const objProduct = {
        // id lo proporciona la API
        name: obj.name,
        price: obj.price,
        image: obj.image,
        type: obj.type,
      }
      addProduct(token, objProduct)
        .then(response => {
          this.products = [...this.products, response],
          console.log(response)
          })
        .then(this.modalProd = false)
    },
    showEmployees(){
      this.employeeList = true,
      this.productsList = false
    },
    showProducts(){
      this.productsList = true,
      this.employeeList = false
    },
    clickPrev(){
      this.$refs.ProductsList.decrease();
    },
    clickNext(){
      this.$refs.ProductsList.increase();
    }
  }
};
</script>

<style lang="scss">
    @import "../scss/main.scss";

    @mixin background-img($color, $url, $size, $border, $radius) {
      background-color: $color;
      background-image: url($url);
      background-size: $size;
      border: $border;
      border-radius: $radius;
    }

    @mixin width-height($width, $height) {
      width: $width;
      height: $height;
    }

    .manager {
      height: 100vh;
      display: grid;
      grid-template-columns: 10% 80% 10%;
      grid-template-rows: 10% 78% 12%;
    }

    .container-back {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: end;
        align-items: center;

        h3 {
            font-size: 12px;
            margin-bottom: 10px;
        }

        .btn-back {
            @include width-height(65px, 65px);
            outline: none;
            cursor: pointer;
            @include background-img(transparent,'../assets/btn-back.svg', contain, none, 50%);
            background-size: cover;
        }
    }

    .btn-prev, .btn-next {
      @include width-height(65px, 65px);
      border: none;
      border-radius: 50%;
      align-self: center;
      background-color: transparent;
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
      outline: none;
      cursor: pointer;
    }

    .btn-prev {
      grid-column: 1 /2;
      grid-row: 2 / 3;
      justify-self: end;
      background-image: url(../assets/arrow-prev.svg);
    }

    .btn-next {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      background-image: url(../assets/arrow-next.svg);
    }

    .new-item {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: end;
      justify-self: start;

      h3 {
        width: 65px;
        font-size: 12px;
        margin-bottom: 10px;
      }

      .btn-new-item {
        @include width-height(65px, 65px);
        outline: none;
        cursor: pointer;
        @include background-img(transparent,'../assets/btn-new-employee.svg', contain, none, 50%);
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      grid-column: 1 / 4;
      grid-row: 3 / 4;
      border-top: 1px solid black;
    }
</style>
