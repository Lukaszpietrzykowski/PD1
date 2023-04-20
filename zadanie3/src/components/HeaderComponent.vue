<template>
  <div class="menubar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="menubar-items">
      <div class="menubar-item">
        <span>HOME</span>
      </div>
      <div class="menubar-item">
        <span>GAME</span>
      </div>
      <div class="menubar-item">
        <span>ABOUT</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menubar {
  justify-content: space-between;
  display: flex;
  height: 64px;
  background-color: #231942;
}

.logo {
  display: flex;
  object-fit: contain;
  max-width: 30%;
  height: auto;
  padding: 15px;
}

.menubar-items {
  display: flex;
}

.menubar-item {
  font-family: sans-serif;
  display: flex;
  color: #fffafb;
  align-items: center;
  font-size: 18pt;
  padding-left: 15px;
  padding-right: 15px;
}

.menubar-item:hover {
  background-color: #88bb92;
  color: #231942;
  transition: all 0.3s;
}
</style>