module.exports = function(api) {
  api.cache(true); // Habilita o cache para configurações do Babel
  return {
    presets: ['babel-preset-expo'], // Define os presets do Babel a serem utilizados 
  };
};
