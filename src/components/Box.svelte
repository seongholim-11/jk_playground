<script>
    export let item;

    function randomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    let color = [randomColor(), randomColor()];
    let height = Math.floor(Math.random() * (500 - 300 + 1)) + 200

</script>

<div class="w-full box rounded-md p-5" 
     style="background-image: linear-gradient(45deg, {color}); height: {height}px;">
    {item}
</div>
