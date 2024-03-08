<script>
    import Masonry from "svelte-bricks";
    import Box from "../components/Box.svelte";
    

    let nItems = 10;
    $: items = [...Array(nItems).keys()];

    let [minColWidth, maxColWidth, gap] = [200, 500, 20];
    let width, height;
</script>

<Masonry
    {items}
    {minColWidth}
    {maxColWidth}
    {gap}
    let:item
    bind:width
    bind:height
>
    <a href={`/playground/${item}`}
        ><div class="flex justify-center"><Box {item} /></div></a
    >
</Masonry>
