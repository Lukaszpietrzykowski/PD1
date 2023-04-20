<script setup>
</script>

<template>
  <div class="container">
    <div class="content-container">
      <div class="content">
        <div class="content-box">
          <span class="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique sit amet sem a blandit. Praesent eu velit sit amet
            tortor placerat ultrices. Nulla pretium, metus non sollicitudin
            tristique, turpis leo venenatis sapien, eu aliquam neque ipsum eu
            nunc. Vivamus non eros eget purus faucibus suscipit. Suspendisse
            pretium massa quis mattis lacinia. Aenean dapibus mi arcu, quis
            varius ipsum dapibus at. Ut mattis facilisis est, ut porta odio
            consequat vel. Nulla in augue vulputate, venenatis massa et,
            laoreet risus. Nam dapibus luctus velit, ac hendrerit augue
            sollicitudin malesuada. Donec vestibulum tortor a leo laoreet, ut
            semper augue mollis. Etiam ligula sapien, aliquam eget erat sit
            amet, imperdiet rutrum arcu. Quisque eu fringilla velit, non
            iaculis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis tristique sit amet sem a blandit. Praesent eu velit sit
            amet tortor placerat ultrices. Nulla pretium, metus non
            sollicitudin tristique, turpis leo venenatis sapien, eu aliquam
            neque ipsum eu nunc. Vivamus non eros eget purus faucibus
            suscipit. Suspendisse pretium massa quis mattis lacinia. Aenean
            dapibus mi arcu, quis varius ipsum dapibus at. Ut mattis facilisis
            est, ut porta odio consequat vel. Nulla in augue vulputate,
            venenatis massa et, laoreet risus. Nam dapibus luctus velit, ac
            hendrerit augue sollicitudin malesuada. Donec vestibulum tortor a
            leo laoreet, ut semper augue mollis. Etiam ligula sapien, aliquam
            eget erat sit amet, imperdiet rutrum arcu. Quisque eu fringilla
            velit, non iaculis turpis.
          </span>
          <button class="main-btn">Read more</button>
        </div>
        <span class="img-wrapper">
          <img class="zdj" src="../assets/img1.jpg" alt="img1">
        </span>
      </div>
      <div class="content">
        <div class="content-box">
          <span class="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique sit amet sem a blandit. Praesent eu velit sit amet
            tortor placerat ultrices. Nulla pretium, metus non sollicitudin
            tristique, turpis leo venenatis sapien, eu aliquam neque ipsum eu
            nunc. Vivamus non eros eget purus faucibus suscipit. Suspendisse
            pretium massa quis mattis lacinia. Aenean dapibus mi arcu, quis
            varius ipsum dapibus at. Ut mattis facilisis est, ut porta odio
            consequat vel. Nulla in augue vulputate, venenatis massa et,
            laoreet risus. Nam dapibus luctus velit, ac hendrerit augue
            sollicitudin malesuada. Donec vestibulum tortor a leo laoreet, ut
            semper augue mollis. Etiam ligula sapien, aliquam eget erat sit
            amet, imperdiet rutrum arcu. Quisque eu fringilla velit, non
            iaculis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis tristique sit amet sem a blandit. Praesent eu velit sit
            amet tortor placerat ultrices. Nulla pretium, metus non
            sollicitudin tristique, turpis leo venenatis sapien, eu aliquam
            neque ipsum eu nunc. Vivamus non eros eget purus faucibus
            suscipit. Suspendisse pretium massa quis mattis lacinia. Aenean
            dapibus mi arcu, quis varius ipsum dapibus at. Ut mattis facilisis
            est, ut porta odio consequat vel. Nulla in augue vulputate,
            venenatis massa et, laoreet risus. Nam dapibus luctus velit, ac
            hendrerit augue sollicitudin malesuada. Donec vestibulum tortor a
            leo laoreet, ut semper augue mollis. Etiam ligula sapien, aliquam
            eget erat sit amet, imperdiet rutrum arcu. Quisque eu fringilla
            velit, non iaculis turpis.
          </span>
          <button class="main-btn">Read more</button>
        </div>
        <span class="img-wrapper">
          <img class="zdj" src="../assets/img2.jpg" alt="img2">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #231942;
  font-size: 16pt;
  background-color: #fffafb;
}

.content {
  font-family: sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin: 20px;
  height: auto;
}

.content-box {
  align-items: center;
  padding: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-text {
  padding: 10px;
}

.main-btn:hover {
  border-color: 88bb92;
  background-color: #231942;
  color: #fffafb;
  transition: all 0.3s;
}

.main-btn {
  font-size: 14pt;
  color: #231942;
  padding: 0;
  border: none;
  background-color: #88bb92;
  border-radius: 8px;
  max-height: 10%;
  min-height: 10%;
  width: 50%;
}

.img-wrapper {
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
}

.zdj {
  overflow: auto;
  border-radius: 10px;
  object-fit: contain;
}
</style>
