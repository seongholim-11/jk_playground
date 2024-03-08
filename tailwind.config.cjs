module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    daisyui: {
      daisyui: {
        themes: ["light", "dark"],
      },
    },
    plugins: [require("daisyui")],
};
