<script>
    export let data;
</script>

<div class="container">
    <p class="content">{data}</p>
</div>

<style>
    .container {
        width: fit-content;
        padding: 1px 5px;
        margin-left: 20px;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 15px;
    }

    .content {
        font-size: 12px;
        margin: 0 auto;
    }
</style>