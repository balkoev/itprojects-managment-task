<template id="detail">
  <div class="container">
    <ConfirmModal
      v-if="isVisibleConfirm"
      @toggle-modal="toggleModalRemove"
      @remove-item="remove"
    />
    <PropertyModal
      v-if="isVisibleAdd"
      @toggle-modal="toggleModalAdd"
      @add-item="add"
    />
    <EditModal
      v-if="isVisibleEdit"
      @toggle-modal="toggleModalEdit"
      @edit-item="edit"
      @cancel-item="cancel"
      :edit-property="editProperty"
    />
    <div class="contacts">
      <div class="contacts__header">
        {{ contact.name }} –
        <span class="add-contact-btn" @click="addProxy">add property</span>
        <span class="step-back" v-if="prevContact !== null" @click="stepBack"
          >step back (last)</span
        >
      </div>
      <div class="contacts__content">
        <ul v-for="(item, index) in contact.data" :key="index">
          <li>
            {{ item.name }}: {{ item.value }} –
            <span
              class="confirm-btn"
              @click="editProxy(item.name, item.value, index)"
              >edit</span
            >
            <span class="delete-btn" @click="removeProxy(index)">remove</span>
          </li>
        </ul>
        <span
          v-if="Object.keys(contact.data).length === 0"
          class="contacts__empty"
          >Property is empty</span
        >
      </div>
      <div class="contacts__extra"></div>
    </div>
  </div>
</template>

<script>
import PropertyModal from "@/components/PropertyModal";
import ConfirmModal from "@/components/ConfirmModal";
import EditModal from "@/components/EditModal";
import data from "../mocks";

export default {
  name: "Detail",
  components: {
    PropertyModal,
    ConfirmModal,
    EditModal,
  },
  props: {
    contact1: Object,
  },
  data() {
    return {
      contact: null,
      prevContact: null,
      isVisibleAdd: false,
      isVisibleConfirm: false,
      isVisibleEdit: false,
      removeIndex: null,
      editProperty: null,
    };
  },
  created() {
    const contact = data.contacts.find(
      (contact) => contact.id == this.$route.params.id
    );
    if (contact) {
      this.contact = contact;
    }
  },
  methods: {
    toggleModalAdd() {
      this.isVisibleAdd = !this.isVisibleAdd;
    },
    addProxy() {
      this.toggleModalAdd();
    },
    add(form) {
      this.prevContact = JSON.parse(JSON.stringify(this.contact));
      this.contact.data = [...this.contact.data, form];
      this.toggleModalAdd();
    },
    stepBack() {
      const temp = JSON.parse(JSON.stringify(this.prevContact));
      this.prevContact = JSON.parse(JSON.stringify(this.contact));
      this.contact = JSON.parse(JSON.stringify(temp));
    },
    toggleModalRemove() {
      this.isVisibleConfirm = !this.isVisibleConfirm;
    },
    removeProxy(index) {
      this.toggleModalRemove();
      this.removeIndex = index;
    },
    remove() {
      this.prevContact = JSON.parse(JSON.stringify(this.contact));
      this.contact.data.splice(this.removeIndex, 1);
      this.toggleModalRemove();
    },
    toggleModalEdit() {
      this.isVisibleEdit = !this.isVisibleEdit;
    },
    editProxy(name, value, index) {
      this.toggleModalEdit();
      this.editProperty = { name, value, index };
    },
    edit(form) {
      this.prevContact = JSON.parse(JSON.stringify(this.contact));
      this.contact.data[this.editProperty.index].name = form.name;
      this.contact.data[this.editProperty.index].value = form.value;

      this.toggleModalEdit();
    },
    cancel() {
      this.toggleModalEdit();
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
  position: relative;
  text-align: center;
  padding: 32px 16px;
  font-size: 18px;
  font-weight: 600;
  color: #232323;
}

.contacts__content {
  padding: 20px;
  width: 100%;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
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
  margin: 5px;
}

.delete-btn:hover {
  background-color: #f8e7e7;
  color: #ec2e31;
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

.contacts__empty {
  display: flex;
  justify-content: center;
  padding: 20px;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
  text-align: center;
}

.step-back {
  position: absolute;
  top: 50;
  right: 20px;
  color: #4579f5;
  cursor: pointer;
}

.step-back:hover {
  color: #1358fa;
}
</style>