<template>
  <div class="manager">
    <nav-component fullname="manager" :style="employeeList ? colorEmployees : colorProducts "/>
    <router-link to="" tag="button" class="btn-prev" :style="employeeList ? colorEmployees : colorProducts"></router-link>
    <EmployeeList v-if="employeeList" :users="users" @click="getUserData"/>
    <ProductsList v-if="productsList" />
    <router-link to="" tag="button" class="btn-next" :style="employeeList ? colorEmployees : colorProducts"></router-link>
    <div class="new-employee">
        <h3>{{ employeeList ? 'Agregar trabajador' : 'Agregar producto' }}</h3>
        <button class="btn-new-employee" @click="modal=true"></button>
    </div>
    <modal-employee v-if="modal" @close="modal=false" @click="handleAddEmployee" :user="user" button="Agregar Trabajador" />
    <div class="buttons">
        <!-- <router-link to="" tag="button" class="btn-manager employees">Trabajadores</router-link> -->
        <button @click="showEmployees" class="btn-manager" :style="employeeList ? styleObj1 : 'none'">Trabajadores</button>
        <button @click="showProducts" class="btn-manager" :style="productsList ? styleObj2 : 'none'">Productos</button>
        <!-- <router-link to="" tag="button" class="btn-manager">Productos</router-link> -->
    </div>
  </div>
</template>

<script>
import { getEmployees, addEmployee } from '../controllers/users.js'

import NavComponent from './NavComponent.vue';
import EmployeeList from './EmployeeList.vue';
import ModalEmployee from './ModalEmployee.vue';
import ProductsList from './ProductsList';

const token = 'qwerryuipuq';

export default {
  name: 'managerView',
  data() {
    return {
      modal: false,
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
      }
    };
  },
  components: {
    NavComponent,
    EmployeeList,
    ModalEmployee,
    ProductsList,
  },
  mounted () {
    getEmployees(token)
      .then(response => (this.users = response))
  },
  methods: {
    handleAddEmployee(obj) {
      const objEmployee = {
        // Borrar luego el id
        _id: Math.random()*1000,
        email: obj.email,
        password: obj.password,
        roles: {
          admin: obj.role === "true"
        }
      }
      addEmployee(token, objEmployee)
        .then(response => (this.users = [...this.users, response]))
        .then(this.modal = false)
    },
    getUserData(user){
      console.log(user.email);
    },
    showEmployees(){
      this.employeeList = true,
      this.productsList = false
    },
    showProducts(){
      this.productsList = true,
      this.employeeList = false
    }
  }
};

</script>

<style lang="scss">
    @mixin background-img($color, $url, $size, $border, $radius) {
      background-color: $color;
      background-image: url($url);
      background-size: $size;
      border: $border;
      border-radius: $radius;
    }

    .manager {
      height: 100vh;
      display: grid;
      grid-template-columns: 10% 80% 10%;
      grid-template-rows: 10% 78% 12%;
    }

    .btn-prev, .btn-next {
      width: 65px;
      height: 65px;
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

    .new-employee {
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

      .btn-new-employee {
        width: 65px;
        height: 65px;
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

      .btn-manager {
        width: 460px;
        height: 60px;
        font-size: 30px;
        font-weight: 800;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: white;
        border: 1px solid black;
      }

      .employees {
        background-color: #00C7D4;
        border: none;
      }
    }
</style>
