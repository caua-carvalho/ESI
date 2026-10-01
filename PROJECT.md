# Escala ESI - Gestão de Escala e Serviços

## Visão geral

O **Escala ESI** é uma aplicação web mobile-first voltada para militares gerenciarem suas escalas de serviço, plantões e solicitações administrativas diretamente pelo dispositivo móvel. O projeto foi estruturado a partir de um layout exportado do Figma Make, modularizado em componentes e telas independentes em React e TypeScript.

## Objetivo

Proporcionar aos militares e graduados uma interface ágil, intuitiva e centralizada para acompanhamento da escala semanal, requisição e troca de serviços entre colegas, envio de pedidos de pernoite e atestados médicos de dispensa, além de visualização do quadro geral da companhia.

## Problema que resolve

* Dificuldade no acompanhamento diário e semanal da escala de serviços militares.
* Processos manuais ou burocráticos para solicitação de troca de serviço entre militares da mesma companhia.
* Falta de transparência no acompanhamento do status de solicitações (aguardando colega, sargento ou Seção).
* Gestão descentralizada de atestados médicos e pedidos de pernoite no alojamento.

## Público-alvo

* Militares (Soldados, Cabos, Sargentos) escalados para serviços operacionais e administrativos.
* Graduados e Seção responsáveis pela aprovação de trocas, pernoites e atestados.

## Principais funcionalidades

1. **Autenticação e Acesso**:
   * Login com patente, nome de guerra, turma, antiguidade e senha.
   * Modal de orientação para recuperação de acesso junto à Seção.

2. **Dashboard / Início**:
   * Resumo dos serviços do dia com horário, posto e código de serviço.
   * Indicador da fase atual da companhia (ex: Missão).
   * Contador de serviços individuais em comparação com a média da turma.
   * Lista rápida de pendências e atalhos para ações rápidas.

3. **Gestão de Escala**:
   * **Escala Pessoal**: visualização cronológica dia a dia dos serviços atribuídos.
   * **Escala Global**: matriz com filtro e busca por militar para visualização de plantões de toda a companhia.

4. **Fluxo de Troca de Serviço**:
   * Seleção de serviço futuro disponível para troca.
   * Busca e seleção de colega elegível da mesma companhia.
   * Revisão de regras e envio de solicitação.
   * Aceite ou recusa com justificativa de trocas recebidas.

5. **Fluxo de Pernoite**:
   * Solicitação de permanência em alojamento por data única ou período.
   * Justificativa e envio direto para apreciação do sargento.

6. **Fluxo de Atestado Médico (5 etapas)**:
   * Etapa 1: Confirmação dos dados militares.
   * Etapa 2: Seleção do período de dispensa e descrição de sintomas.
   * Etapa 3: Identificação automática de serviços afetados pela escala.
   * Etapa 4: Envio/captura do documento médico (câmera/galeria).
   * Etapa 5: Revisão e envio para análise da Seção.

7. **Central de Solicitações e Histórico**:
   * Filtros por status: Todas, Pendentes e Concluídas.
   * Detalhamento do histórico e linha do tempo de aprovação.

8. **Avisos e Notificações**:
   * Agrupamento temporal (Hoje, Ontem, Anteriores).
   * Detalhes de avisos e tela de convocação de reserva.

9. **Perfil e Configurações**:
   * Dados pessoais militares (patente, turma, antiguidade, esquadrilha).
   * Gráfico de histórico mensal de serviços realizados.
   * Preferências de notificações e encerramento de sessão.

10. **Estados do Sistema (Feedback UX)**:
    * Telas padronizadas para Carregamento (Loading com skeletons), Erro de conexão, Lista vazia e Acesso não autorizado.

## Telas

* `LoginScreen`: Autenticação e recuperação de acesso.
* `HomeScreen`: Visão geral diária, estatísticas e atalhos.
* `ScheduleScreen`: Escala pessoal e global da companhia.
* `ServiceDetailSheet`: Detalhamento do posto, período e ação de troca.
* `NewSwapScreen`: Seleção de serviço a ser trocado.
* `SelectColleagueScreen`: Busca de militar parceiro na troca.
* `ReviewSwapScreen`: Revisão de termos e regras da troca.
* `SwapSentScreen`: Confirmação e linha do tempo da troca enviada.
* `SwapReceivedScreen`: Aceite ou recusa fundamentada de troca recebida.
* `NewOvernightScreen`: Formulário de pedido de pernoite.
* `OvernightSentScreen`: Confirmação do pedido de pernoite.
* `NewMedicalScreen`: Fluxo guiado em 5 etapas para envio de atestado.
* `MedicalSentScreen`: Confirmação e linha do tempo do atestado enviado.
* `MedicalApprovedScreen`: Confirmação de atestado aceito e escala recalculada.
* `MedicalRejectedScreen`: Justificativa e motivo da recusa do atestado.
* `RequestsScreen`: Lista filtrável de solicitações.
* `RequestDetailScreen`: Linha do tempo e detalhe de cada solicitação.
* `NotificationsScreen`: Lista de notificações e convocações.
* `NotificationDetailScreen`: Detalhamento de avisos.
* `ReserveConvocationScreen`: Notificação de convocação como reserva.
* `ProfileScreen`: Dados cadastrais e atalhos de perfil.
* `ServiceHistoryScreen`: Histórico e gráfico mensal de serviços.
* `SettingsScreen`: Ajustes de notificações e termos.
* `LoadingStateScreen`, `ErrorStateScreen`, `EmptyStateScreen`, `NoPermissionScreen`: Estados de resposta do sistema.

## Tecnologias

* **React 19**
* **TypeScript 5.7**
* **Vite 8**
* **Tailwind CSS v4** (`@tailwindcss/vite`)
* **Google Fonts**: Inter e JetBrains Mono

## Estado atual

* Frontend totalmente modularizado, tipado e funcional.
* Todos os fluxos de navegação e telas mapeados e navegáveis.
* Dados mockados organizados em arquivos específicos na pasta `src/data/`.
* Componentes de interface genéricos centralizados em `src/components/ui/`.
* Preparado para substituição transparente dos mocks por chamadas de API.

## Próximos passos

1. Implementação de camada de cliente HTTP / API para comunicação com backend quando este for disponibilizado.
2. Integração com sistema real de autenticação JWT/OAuth.
3. Upload real de arquivos na etapa de atestado médico (Multipart / S3 / Bucket).
4. Sincronização em tempo real de avisos e notificações (WebSockets / SSE).
