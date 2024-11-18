<script>
    export let isVisible = false; // Control whether the popup is shown
    export let message = ""; // Message to display in the popup
    export let confirmLabel = "Yes"; // Label for the confirm button
    export let cancelLabel = "No"; // Label for the cancel button
  
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  
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
    }
  
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      width: 300px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    .modal-actions {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }
  
    .confirm-button {
      background-color: green;
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .cancel-button {
      background-color: red;
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  