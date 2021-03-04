<script context="module">
  import * as sotionPkg from "sotion";
  const { Sotion, sotion } = sotionPkg;
  export async function preload() {
    const blocks = await sotion
      .setFetch(this.fetch)
      .fetchPage("a61900f8210246809d726e120d8c7a1c");
    return { blocks };
  }
</script>

<script>
  export let blocks;
</script>

<Sotion {blocks} />
