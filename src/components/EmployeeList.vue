<template>
    <div class="employees-list">
      <div v-for="(user, index) in users" :key="index" class="each-employee">
        <h3> {{ user.email }} </h3>
        <h3 class="employee-role"> {{ user.role.admin ? 'Admin' : 'User' }} </h3>
        <button @click="showEditModal(user._id)" class="edit-employee-btn"></button>
        <button @click="showConfirmationModal(user._id)" class="delete-employee-btn"></button>
      </div>
      <confirmation-modal v-if="confirmation" @close="confirmation=false, choice={}" :addFunction="handleDeleteEmployee"/>
      <modal-employee v-if="modal" @close="modal=false"
        :editEmail="email"
        :editRole="role"
        :addFunction="handleEditEmployee"
        button="Guardar cambios"
      />
    </div>
</template>

<script>

import ConfirmationModal from './ConfirmationModal.vue';
import ModalEmployee from './ModalEmployee.vue';
import { deleteEmployee, editEmployee } from '../controllers/users';

const token = 'qwerryuipuq';

export default {
  name: 'EmployeeList',
  props: {
    users: Array,
  },
  components: {
    ModalEmployee,
    ConfirmationModal,
  },
  data() {
    return {
      modal: false,
      confirmation: false,
      choice: {},
    };
  },
  methods: {
    showEditModal(index) {
      this.modal = true;
      const userToEdit = this.users.filter(function(user) {
        return index === user._id;
      });
      this.choice = userToEdit[0];
      this.email = this.choice.email;
      this.role = this.choice.role.admin;
    },
    showConfirmationModal(index) {
      console.log('i clicked');
      this.confirmation = true;
      const modalToDelete = this.users.filter(function(user) {
        return index === user._id;
      });
      this.choice = modalToDelete[0];
    },
    handleDeleteEmployee() {
      console.log('i clicked now');
      this.confirmation = false;
      console.log(this.choice._id);
      deleteEmployee(token, this.choice._id)
        .then((resp) => {
          console.log(resp)
        })
    },
    handleEditEmployee() {
      console.log('i clicked in button edit'); 
      this.modal = false;
      editEmployee(token, this.choice, this.choice._id)
        .then((resp) => {
          console.log(resp)
        })
    },
  },
};

</script>

<style lang="scss">
  .employees-list {
      display: flex;
      width: 90%;
      overflow-y: scroll;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      flex-direction: column;
      border-radius: 20px;
      border: 1px solid black;
      box-sizing: content-box;
      margin: 40px auto;

      .each-employee {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        box-sizing: border-box;

        h3 {
          font-family: Livvic, Helvetica, Arial, sans-serif;
          font-size: 25px;
          width: 10%;
        }

        .employee-role {
          margin-left: 80px;
        }

        .edit-employee-btn, .delete-employee-btn {
          width: 50px;
          height: 50px;
          background-size: contain;
          border: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
        }

        .edit-employee-btn {
          background-color: #00C7D4;
          border-radius: 10px;
          background-image: url(../assets/btn-edit.svg);
          background-size: 70%;
          background-repeat: no-repeat;
          background-position: center;
        }

        .delete-employee-btn {
          background-image: url(../assets/btn-delete.svg);
        }
      }
    }
</style>
