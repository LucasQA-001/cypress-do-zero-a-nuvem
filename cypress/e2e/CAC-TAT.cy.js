describe('Testes TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })
it('Testa Email Invalido', () => {
  cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  cy.get('input[type=email]')
    .should('be.visible')
    .type('emailinvalidosemarroba.com');
  cy.get('input[type=email]')
    .should('have.value', 'emailinvalidosemarroba.com')
})
it('Teste Seleção Blog', () => {
  cy.get('#product')
  .select('Blog')
  .should('have.value', 'blog')
})
it('Testa Seleção YouTube',() =>  {
  cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
})
it('Testa Seleção Mentoria', () => {
    cy.get('#product')
      .select('Mentoria')
      .should('have.value', 'mentoria')
})
it('Seleciona Tipo de Atendimento Ajuda', () => {
  cy.get('input[type="radio"][value="ajuda"')
    .check()
    .should('be.checked')
})
it('Seleciona Tipo de Atendimento Elogio', () => {
  cy.get('input[type="radio"][value="elogio"]')
    .check()
    .should('be.checked')
})
it('Seleciona Tipo de Atendimento Feedback', () => {
    cy.get('input[type="radio"][value="feedback')
    .check()
    .should('be.checked')
})
it('exibe mensagem de erro ao enviar formulario com telefone obrigatorio em branco', () => {
    cy.get('input[type="checkbox"][id="phone-checkbox"]')
      .check()
      .should('be.checked')
    cy.get('button[type="submit"]')
      .click()
    cy.contains('Valide os campos obrigatórios!')
})
it('seleciona um arquivo da pasta fixture', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
})
it('Seleicona um arquivo simulando um drag and drop', () => {
    cy.fixture('example.json').as('example')
    cy.get('#file-upload')
      .selectFile('@example', {action: 'drag-drop'})
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
})
it('verifica a pagina de politica de forma independente sem click', () => {
    cy.get('a[href="privacy.html"]')
      .should('have.attr', 'target','_blank')
})
it('verifica a pagina de politica de forma independente coim click', () => {
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()
    cy.contains('CAC TAT - Política de Privacidade')
})

})