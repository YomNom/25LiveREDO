<script>
    export let tag;
</script>

<div class="container">
    <p class="content">{tag}</p>
</div>

<style>
    .container {
        width: fit-content;
        height: fit-content;
        padding: 1px 5px;
        margin-right: 20px;
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