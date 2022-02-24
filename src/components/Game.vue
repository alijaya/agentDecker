<script setup lang="ts">
import { ref } from "vue";
import { AgentDecker, AgentDeckerState } from "~/scripts/AgentDecker";
import { Client } from "boardgame.io/client";
import { ClientState } from "boardgame.io/dist/types/src/client/client";
import { GetDetails } from "~/scripts/Card";
import Card from "~/components/Card.vue";

const client = Client({ game: AgentDecker, numPlayers: 1 });

const G = ref(client.getState()?.G);

client.start();
client.subscribe(update);

function update(state: ClientState<AgentDeckerState>) {
  G.value = state?.G;
}
</script>

<template>
  <p>Alarm: {{ G?.alarm }}</p>
  <div class="hand"><Card v-for="id in G?.obstacleDeck" :id="id" /></div>
</template>

<style scoped>
.hand {
  display: flex;
  flex-wrap: wrap;
}
</style>
