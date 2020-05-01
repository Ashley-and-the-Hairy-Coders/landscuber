<template>
  <div class="CustomerReg">
    <div class="createNote">
      <form>
          <label for="primaryCheck"
          class="form-group">
          Make Primary </label>
          <input type="checkbox" class="form-group ml-1" checked v-model="newCustomer.primary" />
          <input
            type="text"
            class="form-control"
            placeholder="Street Address"
            v-model="newCustomer.streetAddress"
            required
          />
          <input
            type="text"
            class="form-control"
            placeholder="City"
            v-model="newCustomer.state"
            required
          />

          <input
            type="text"
            class="form-control"
            placeholder="State"
            v-model="newCustomer.state"
            required
          />
          <input
            type="tel"
            class="form-control"
            placeholder="555-555-1234"
            v-model="newCustomer.cellPhone"
            required
          />
          <input
            type="tel"
            class="form-control"
            placeholder="555-555-0000"
            v-model="newCustomer.primaryPhone"
          />
        <button
          type="submit"
          data-dismiss="modal"
          @click="Register()"
          class="btn btn-sm btn-dark"
        >Post Job!</button>
      </form>
    </div>
  </div>
</template>