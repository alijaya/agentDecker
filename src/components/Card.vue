<script setup lang="ts">
import { computed, ref } from "vue";
import { Card, CardLib, ResourceType } from "~/scripts/Card";

const props = defineProps<{
  id: string;
}>();

const card = computed(() => CardLib[props.id]);
</script>

<template>
  <div class="card">
    <div>{{ card.name }}</div>
    <div class="icon">
      <div
        v-if="card.resource?.type == ResourceType.Stealth"
        class="stealth"
      ></div>
      <div
        v-if="card.resource?.type == ResourceType.Fighting"
        class="fighting"
      ></div>
      <div class="value">{{ card.resource?.value }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 7rem;
  height: 10rem;
  background: white;
  border: 1px solid #cccccc;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
}

.icon {
  position: relative;
  width: 1.4rem;
  height: 1.4rem;
}
.stealth {
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 1.2rem solid rgb(82, 110, 233);
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
}

.fighting {
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  background: rgb(240, 101, 101);
  border-radius: 50%;
}

.value {
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
