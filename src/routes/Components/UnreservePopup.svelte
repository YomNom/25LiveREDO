<script lang="ts">
    import { createEventDispatcher } from "svelte";

    // Exported props
    export let isVisible: boolean = false; // Controls popup visibility
    export let message: string = "Are you sure you want to unreserve this location?";
    export let confirmLabel: string = "Yes";
    export let cancelLabel: string = "No";

    // Dispatcher
    const dispatch = createEventDispatcher<{ confirm: void; cancel: void }>();

    // Emit events
    function confirm() {
        dispatch("confirm");
    }

    function cancel() {
        dispatch("cancel");
    }
</script>

{#if isVisible}
    <div class="modal-overlay">
        <div class="modal-content">
            <p>{message}</p>
            <div class="modal-actions">
                <button class="confirm-button" on:click={confirm}>{confirmLabel}</button>
                <button class="cancel-button" on:click={cancel}>{cancelLabel}</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        width: 400px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal-actions {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .confirm-button {
        background-color: red;
        color: white;
        border: none;
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    .cancel-button {
        background-color: gray;
        color: white;
        border: none;
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
