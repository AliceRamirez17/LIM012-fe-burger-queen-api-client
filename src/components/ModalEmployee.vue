<template>
    <div class="modal">
      <div class="modal-employee">
          <label>Email</label>
          <input type="email" v-model="email">
          <label>Password</label>
          <input type="password" v-model="password">
          <label for="role">Puesto</label>
          <select v-model="role" id="role">
            <option selected>Administrador</option>
            <option >Usuario</option>
          </select>
          <button class="btn-close-modal" @click="$emit('close')"></button>
          <button class="submit-modal" @click="addFunction(userObj)">{{ button }}</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalEmployee',
  data() {
    return {
      password: '',
      email: '',
      role: '',
    };
  },
  props: {
    button: String,
    editEmail: String,
    editRole: Boolean,
    addFunction: Function,
  },
  mounted () {
    if (this.button === 'Guardar cambios') {
      this.email = this.editEmail;
      if (this.editRole === true) {
        this.role = "Administrador"
      } else {
        this.role = "Usuario"
      }
    } 
  },
  computed: {
    userObj() {
      return {
        email: this.email,
        password: this.password,
        role: this.role,
      }
    }
  },
  methods: {
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

    .modal {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.4);

        .modal-employee {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 480px;
            height: 580px;
            background-color: white;
            border-radius: 20px;
            padding: 40px;

            label {
                font-size: 24px;
                font-weight: 800;
                text-align: left;
            }

            input {
                width: 300px;
                height: 45px;
                border-radius: 10px;
                border-style: none;
                border: 1px solid black;
                outline: none;
                font-size: 22px;
                padding-left: 5px;
            }

            .btn-close-modal {
                position: absolute;
                top: 40px;
                right: 40px;
                width: 50px;
                height: 50px;
                outline: none;
                cursor: pointer;
                @include background-img(transparent,'../assets/btn-exit.svg', contain, none, 50%);
            }

            .submit-modal {
                width: 330px;
                height: 60px;
                align-self: center;
                border-radius: 10px;
                background-color: #00C7D4;
                border-style: none;
                font-size: 28px;
                font-weight: 600;
                outline: none;
                cursor: pointer;
            }

            select {
              width: 300px;
              height: 45px;
              border-radius: 10px;
              border: 1px solid black;
            }
        }
    }
</style>
