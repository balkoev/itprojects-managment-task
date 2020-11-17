<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form v-if="!showConfirm" @submit.prevent="onSubmit">
            <div class="modal-header">
              <h3>Edit property</h3>
            </div>
            <div class="modal-body">
              <ul>
                <li>
                  <label>Property</label>
                  <input type="text" v-model="name" />
                </li>
                <li>
                  <label>Value</label>
                  <input type="text" v-model="value" />
                </li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="submit" class="confirm-btn">OK</button>
              <div class="cancel-btn" @click="closeProxy">Cancel</div>
            </div>
          </form>
          <div v-if="showConfirm">
            <div class="modal-header">
              <h3>Cancel</h3>
            </div>
            <div class="modal-body">
              <slot name="body">Information will be lost.</slot>
            </div>
            <div class="modal-footer">
              <button @click="onCancel" class="confirm-btn">OK</button>
              <div class="cancel-btn" @click="closeProxy">Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PropertyModal",
  props: {
    editProperty: Object,
  },
  data() {
    return {
      name: this.editProperty.name,
      value: this.editProperty.value,
      showConfirm: false,
    };
  },
  methods: {
    closeProxy() {
      this.showConfirm = !this.showConfirm;
    },
    close() {
      this.$emit("toggle-modal");
    },
    onSubmit() {
      if (this.name.trim() && this.value.trim()) {
        const newProperty = {
          name: this.name,
          value: this.value,
        };
        this.$emit("edit-item", newProperty);
      }
    },
    onCancel() {
      this.$emit("cancel-item");
    },
  },
};
</script>

<style lang="css" scoped>
input {
  padding: 8px;
  outline: none;
}

.confirm-btn {
  background-color: #dde4f5;
  color: #4579f5;
  height: 30px;
  min-width: 100px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  outline: none;
  border: 0px;
}

.cancel-btn {
  border: 1px solid #c7c7c7;
  height: 30px;
  min-width: 100px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  text-align: center;
}

.modal-body {
  margin: 20px;
}

.modal-footer {
  display: flex;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
}
</style>