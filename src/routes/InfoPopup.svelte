<script context="module" lang="ts">
    export type Location = {
      name: string;
      status: string;
      location: string;
      category: string;
      capacity: number;
      resources: string[];
    };
  </script>
  
  <script lang="ts">
    import { createEventDispatcher } from "svelte";
  
    export let isVisible: boolean = false; // Controls popup visibility
    export let location: Location | null = null; // Holds location details, can be null
    export let confirmLabel: string = "Reserve"; // Confirm button label
    export let cancelLabel: string = "Close"; // Cancel button label
  
    const dispatch = createEventDispatcher();
  
    function confirm() {
      dispatch("confirm");
    }
  
    function cancel() {
      dispatch("cancel");
    }
  </script>
  
  {#if isVisible && location}
    <div class="modal-overlay">
      <div class="modal-content">
        <h3>Room Information</h3>
        <p><strong>Name:</strong> {location!.name}</p>
        <p><strong>Location:</strong> {location!.location}</p>
        <p><strong>Category:</strong> {location!.category}</p>
        <p><strong>Capacity:</strong> {location!.capacity}</p>
        <p><strong>Status:</strong> {location!.status}</p>
        <p><strong>Resources:</strong> {location!.resources.join(", ")}</p>
  
        <div class="modal-actions">
          <button class="confirm-button" on:click={confirm} disabled={location!.status !== "Available"}>
            {confirmLabel}
          </button>
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
      width: 400px;
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
  
    .confirm-button:disabled {
      background-color: gray;
      cursor: not-allowed;
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
  