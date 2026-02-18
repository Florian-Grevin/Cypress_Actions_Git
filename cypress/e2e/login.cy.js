describe("TP Connexion — scénario E2E basique", () => { 
    it("doit simuler une connexion utilisateur", () => { 
    // A — Ouvrir la page 
    cy.visit("http://localhost:3000");

    // B — Remplir les champs
    cy.get('input[name="username"]')
      .type("Usertest")

    cy.get('input[name="password"]')
      .type("1234")

    // C — Cliquer sur le bouton 
    cy.get('button[type="submit"]').click();

  });
});
