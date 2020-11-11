<template>
  <div class="container">
    <ConfirmModal
      v-if="isVisibleConfirm"
      @toggle-modal="toggleModalRemove"
      @remove-contact="remove"
    />
    <NewContactModal
      v-if="isVisibleAdd"
      @toggle-modal="toggleModalAdd"
      @add-contact="add"
    />
    <div class="contacts">
      <div class="contacts__header">
        Contact App –
        <span class="add-contact-btn" @click="addProxy">add new contact</span>
      </div>
      <div class="contacts__content">
        <table v-if="contacts.length">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in contacts" :key="index">
              <td>
                <router-link to="/1" class="contact-link">{{
                  item.name
                }}</router-link>
              </td>
              <td>
                <div class="delete-btn" @click="removeProxy(index)">Delete</div>
              </td>
            </tr>
          </tbody>
        </table>
        <span v-if="!contacts.length" class="contacts__empty"
          >Contacts is empty</span
        >
      </div>
      <div class="contacts__extra"></div>
    </div>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal.vue";
import NewContactModal from "@/components/NewContactModal.vue";

export default {
  name: "Contacts",
  components: {
    ConfirmModal,
    NewContactModal,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      isVisibleConfirm: false,
      isVisibleAdd: false,
      contacts: this.data.contacts,
      removeIndex: null,
    };
  },
  methods: {
    toggleModalRemove() {
      this.isVisibleConfirm = !this.isVisibleConfirm;
    },
    toggleModalAdd() {
      this.isVisibleAdd = !this.isVisibleAdd;
    },
    addProxy() {
      this.toggleModalAdd();
    },
    add(form) {
      this.contacts.push(form);
      this.toggleModalAdd();
    },
    removeProxy(index) {
      this.toggleModalRemove();
      this.removeIndex = index;
    },
    remove() {
      this.contacts.splice(this.removeIndex, 1);
      this.toggleModalRemove();
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1170px;
}

.contacts {
  margin: 20px 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.12),
    0 2px 4px -1px rgba(20, 16, 41, 0.12), 0 0 1px 0 rgba(20, 16, 41, 0.24);
}

.contacts__header {
  text-align: center;
  padding: 32px 16px;
  font-size: 18px;
  font-weight: 600;
  color: #232323;
}

.contacts__content {
  padding: 0px 20px 20px 20px;
  width: 100%;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  height: 40px;
  font-size: 14px;
}

td {
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  height: 60px;
  text-align: center;
  width: 200px;
}

.contacts__extra {
  height: 60px;
}

.contact-link {
  color: #4579f5;
  font-weight: 600;
  cursor: pointer;
}

.contact-link:hover {
  color: #1358fa;
}

.add-contact-btn {
  color: #4579f5;
  font-weight: 600;
  cursor: pointer;
}

.add-contact-btn:hover {
  color: #1358fa;
}

.delete-btn {
  background-color: #fbf0f0;
  color: #ca4a4d;
  height: 30px;
  max-width: 100px;
  line-height: 30px;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #f8e7e7;
  color: #ec2e31;
}

.contacts__empty {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>