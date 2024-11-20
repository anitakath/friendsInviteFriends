


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV", // Der Name der Umgebungsvariable
          moduleName: "@env", // Der Name des Moduls, das importiert wird
          path: ".env", // Der Pfad zur .env-Datei
          blocklist: null, // Liste von Variablen, die nicht importiert werden sollen
          allowlist: null, // Liste von Variablen, die importiert werden sollen
          blacklist: null, // Veraltet; nicht mehr verwenden
          whitelist: null, // Veraltet; nicht mehr verwenden
          safe: false, // Ob nur sichere Variablen importiert werden sollen
          allowUndefined: true, // Ob undefinierte Variablen erlaubt sind
          verbose: false, // Ob zusätzliche Informationen ausgegeben werden sollen
        },
      ],
    ],
  };
};


