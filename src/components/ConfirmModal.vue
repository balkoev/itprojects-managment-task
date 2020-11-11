<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>Are you sure?</h3>
          </div>
          <div class="modal-body">
            <slot name="body">Contact would be deleted.</slot>
          </div>
          <div class="modal-footer">
            <div class="confirm-btn" @click="remove">OK</div>
            <div class="cancel-btn" @click="close">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ConfirmModal",
  methods: {
    close() {
      this.$emit("toggle-modal");
    },
    remove() {
      this.$emit("remove-contact");
    },
  },
};
</script>

<style lang="css" scoped>
.confirm-btn {
  background-color: #fbf0f0;
  color: #ca4a4d;
  height: 30px;
  min-width: 100px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
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
  margin: 20px 0;
}

.modal-footer {
  display: flex;
}
</style>