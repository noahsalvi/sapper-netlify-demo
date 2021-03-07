<script context="module">
  import { sotion } from "sotion";

  export async function preload() {
    const meta = await sotion.getScope();
    return { meta };
  }
</script>

<script lang="ts">
  import Nav from "../components/Nav.svelte";
  export let meta: Object;
  const slugArray = Object.values(meta);
</script>

<svelte:head>
  <title>Sapper-Notion Demo</title>
</svelte:head>

<h1>Sapper Notion Demo!</h1>
<div class="sites bg-purple-200 p-5">
  {#each slugArray as slug}
    <a href={slug.slug}>{slug.Page}</a>
  {/each}
</div>

<br />
<br />
<br />

Source:
<a
  href="https://www.notion.so/ae6b5c6a74d048f0b646dad06ba319d8?v=0e7ea8a3a0f24722864fe3122f1f750e"
>
  https://www.notion.so/ae6b5c6a74d048f0b646dad06ba319d8?v=0e7ea8a3a0f24722864fe3122f1f750e
</a>

<style>
  /* :global(body) {
    background: rgb(50, 50, 50);
  } */
  h1 {
    margin-top: 50px;
  }
  .sites {
    display: flex;
    flex-wrap: wrap;
  }

  .sites a {
    flex-grow: 1;
    flex-basis: 0;
    min-width: 150px;
    background: rgb(50, 50, 50);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    padding: 15px 8px;
    border-radius: 5px;
    text-decoration: 0;
    margin-right: 5px;
  }

  .sites a:hover {
    background-color: rgb(67, 67, 67);
  }

  .sites a :last-child {
    margin-right: 0;
  }
</style>
