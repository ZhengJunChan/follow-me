<template>
<div class="page_module">
  <header-label class="header_label" :title="title"></header-label>

  <router-view class="container" @set-title="setTitle"></router-view>

  <download-label class="download"></download-label>
</div>
</template>
