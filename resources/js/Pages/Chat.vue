<template>
  <div class="pt-20">
    <div class="w-[12.5rem] h-[12.5rem] rounded-[1.875rem] shadow-[2px_6px_4px_0px_#181929] bg-gradient-to-b from-base-100 to-base-200 mx-auto">
      card
    </div>

    <!-- Open the modal using ID.showModal() method -->
    <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
    <dialog id="my_modal_1" class="modal">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </div>
      </form>
    </dialog>


  </div>
</template>

<script setup lang="ts">
</script>
