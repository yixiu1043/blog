<template>
  <!-- Put this code anywhere in the body of your page where you want the badge to show up. -->
  <div
    itemscope
    itemtype="http://schema.org/Person"
    class="fiverr-seller-widget"
    style="display: inline-block"
  >
    <a
      itemprop="url"
      href="https://www.fiverr.com/wozblue"
      rel="nofollow"
      target="_blank"
      style="display: inline-block"
    >
      <div
        class="fiverr-seller-content"
        id="fiverr-seller-widget-content-d07d28fc-6d34-4bbe-8fd4-3284ee0a9361"
        itemprop="contentURL"
        style="display: none"
      ></div>
      <div id="fiverr-widget-seller-data" style="display: none">
        <div itemprop="name">wozblue</div>
        <div itemscope itemtype="http://schema.org/Organization">
          <span itemprop="name">Fiverr</span>
        </div>
        <div itemprop="jobtitle">Seller</div>
        <div itemprop="description">
          Hi all, I am Woz. I am a front-end developer with 5 years. My codes
          are hand-typed and well-documented. I develop is using the latest
          development principles and techniques to meet modern web standards. I
          specialize in HTML5, CSS3, REACT, VUE, and FLUTTER. I would love to do
          creative ideas to implement in the real world. I focus on 3 things for
          every project: Communication, Quality, and Support. Thank you, Woz
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "FiverrBadge",
  mounted() {
    var script = document.createElement("script");
    script.id =
      "fiverr-seller-widget-script-d07d28fc-6d34-4bbe-8fd4-3284ee0a9361";
    script.src =
      "https://widgets.fiverr.com/api/v1/seller/wozblue?widget_id=d07d28fc-6d34-4bbe-8fd4-3284ee0a9361";
    script.setAttribute(
      "data-config",
      JSON.stringify({
        category_name: "Programming \u0026 Tech",
      })
    );
    script.async = "true";
    script.defer = "true";
    document.body.appendChild(script);
  },
};
</script>