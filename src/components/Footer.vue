<template>
  <div id="contact" class="bg-blue-950 pt-[50px]">
    <div class="container text-[#fff] relative">
      <div class="flex items-center justify-between pb-10 flex-row-reverse relative">
        <!-- Form -->
        <form
          @submit.prevent="add"
          class="p-[30px] pt-[60px] w-[90%] flex flex-col justify-center items-end md:rounded-[10px] max-md:hidden"
        >
          <input
            type="text"
            :placeholder="$t('name')"
            class="p-3 text-blue-950 bg-white rounded-md w-[53%]  placeholder-[#C4C4C4] mt-5"
          />
          <input
            type="email"
            :placeholder="$t('email')"
            class="p-3 text-blue-950 w-[45%] bg-white rounded-md  placeholder-[#C4C4C4] mt-5"
          />
          <textarea
            :placeholder="$t('feedback')"
            rows="3"
            class="w-[35%] rounded p-3 bg-white text-blue-950 placeholder-[#C4C4C4] mt-5"
            style="resize: none"
          ></textarea>
          <div class="flex items-center justify-center">
            <input id="submit"
              type="submit"
              class="px-[33px] py-3 rounded-md bg-blue-900 mt-[30px] hover:text-[#fff] hover:shadow-none duration-300 shadow-lg"
              :value="$t('submit')"
            />
          </div>
        </form>
        <!-- End Form -->

        <!-- Social Network Links -->
        <div class="flex flex-col absolute z-50 top-[60%] left-0 gap-5">
          <a target="_blank" href="https://github.com/Samiyya24/CV_frontend" class="flex duration-300 gap-10 items-center cursor-pointer">
            <img class="w-[50px] duration-300 shad rounded-full" src="/github.svg" alt="">
            <p>{{ $t("code") }}</p>
          </a>
          <a target="_blank" href="https://t.me/resume_templates_channel" class=" flex duration-300 gap-10 items-center cursor-pointer">
            <img class="w-[50px] duration-300 shad rounded-full" src="/tg.svg" alt="">
            <p>{{ $t("tg") }}</p>
          </a>
        </div>
        <!-- End Social Network Links -->
      </div>
      <p
        style="border-top: 1px solid #666"
        class="py-5 max-md:text-sm max-md:flex justify-center items-center"
      >
      {{ $t("copy") }}
        <!-- Copyright &#x00A9; Resume 2024 -->
      </p>
    </div>
  </div>
</template>

<style scoped>
#contact {
  /* Rotate the gradient by 45 degrees */
  background: linear-gradient(
    45deg,
    rgba(23, 37, 84, 1) 0%,
    rgba(23, 37, 84, 1) 50%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
}

a:hover .shad {
  box-shadow: 0 0 10px 0 white;
}

form {
  /* Rotate the gradient by 45 degrees */
  background: linear-gradient(
    -135deg,
    rgba(23, 37, 84, 1) 0%,
    rgba(23, 37, 84, 1) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

#contact a {
  color: #fff;
}

#contact a:hover {
  color: #ccc;
}

#submit {
  cursor: pointer;
  box-shadow: 0 0 5px 0 rgba(225, 255, 255, 0.9);
  text-shadow: 0 0px 10px rgb(255, 255, 255, 0.2);
}
#submit:hover {
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.9);
}
</style>
