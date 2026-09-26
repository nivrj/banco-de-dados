const regioes = [

    {
        id: "R001",
        numero: 1,
        nome: "Região Costeira Norte",
        tipo: "costeira",

        relevo: "Área costeira com terrenos próximos ao oceano.",

        vegetacao:
            "Vegetação costeira e áreas naturais preservadas.",

        recursos:
            "Ventos constantes, recursos marítimos e área costeira.",

        atividade:
            "Geração de energia eólica, monitoramento climático e apoio costeiro.",

        transporte:
            "Rodovia litorânea e transporte marítimo.",

        habitacao:
            "Alojamentos destinados principalmente às equipes técnicas e trabalhadores.",

        estrutura:
            "Parque eólico, estação de monitoramento, farol costeiro, porto de apoio e centro de manutenção."
    },


    {
        id: "R002",
        numero: 2,
        nome: "Região Costeira Sul",
        tipo: "costeira",

        relevo:
            "Região costeira localizada no extremo sudoeste do território.",

        vegetacao:
            "Vegetação costeira distribuída próxima às áreas portuárias.",

        recursos:
            "Recursos marítimos e acesso direto ao oceano.",

        atividade:
            "Pesca, transporte marítimo, abastecimento e manutenção da frota.",

        transporte:
            "Porto marítimo, rodovia costeira e embarcações.",

        habitacao:
            "Alojamentos para trabalhadores responsáveis pelas operações do porto.",

        estrutura:
            "Porto marítimo, estaleiro, depósitos, centro de abastecimento e torre de controle."
    },


    {
        id: "R003",
        numero: 3,
        nome: "Planícies Centrais Norte",
        tipo: "planicie",

        relevo:
            "Planície extensa com terreno favorável para ocupação urbana.",

        vegetacao:
            "Campos, áreas verdes e vegetação próxima aos rios.",

        recursos:
            "Solo fértil, recursos hídricos e espaço para expansão urbana.",

        atividade:
            "Administração, comércio, serviços públicos e integração territorial.",

        transporte:
            "Rodovias, ferrovias, terminal rodoviário e estação ferroviária.",

        habitacao:
            "Principal concentração urbana da comunidade.",

        estrutura:
            "Sede do Conselho da Cidade, Hospital Central, Mercado Central, Complexo Educacional e Praça Central."
    },


    {
        id: "R004",
        numero: 4,
        nome: "Planícies Centrais Sul",
        tipo: "planicie",

        relevo:
            "Planícies de solo adequado para produção agropecuária.",

        vegetacao:
            "Campos agrícolas, áreas de cultivo e pastagens.",

        recursos:
            "Solo fértil, água e áreas apropriadas para agricultura e criação de animais.",

        atividade:
            "Agricultura, pecuária, armazenamento e pesquisa agrícola.",

        transporte:
            "Rodovias e ferrovia para transporte da produção.",

        habitacao:
            "Moradias rurais distribuídas próximas às áreas produtivas.",

        estrutura:
            "Centro agropecuário, silos, armazéns, estufas, áreas de cultivo e centro de pesquisa agrícola."
    },


    {
        id: "R005",
        numero: 5,
        nome: "Região dos Lagos Interiores",
        tipo: "hidrica",

        relevo:
            "Região formada por um grande sistema de lagos e áreas úmidas.",

        vegetacao:
            "Vegetação abundante ao redor dos lagos e áreas preservadas.",

        recursos:
            "Água doce, recursos pesqueiros e biodiversidade.",

        atividade:
            "Pesca, aquicultura, pesquisa científica, turismo ecológico e preservação.",

        transporte:
            "Estradas locais, pequenas embarcações, marina e píeres.",

        habitacao:
            "Pequenos núcleos residenciais distribuídos próximos aos lagos.",

        estrutura:
            "Marina, centro náutico, centro de pesquisa ambiental, píer de pesca e estação de tratamento de água."
    },


    {
        id: "R006",
        numero: 6,
        nome: "Delta Fluvial Sul",
        tipo: "hidrica",

        relevo:
            "Área onde rios se encontram com regiões alagadas e canais naturais.",

        vegetacao:
            "Vegetação de áreas úmidas e ecossistemas associados aos rios.",

        recursos:
            "Grande disponibilidade de água e biodiversidade aquática.",

        atividade:
            "Tratamento de água, controle de enchentes, pesquisa e preservação ambiental.",

        transporte:
            "Rodovias, pontes e pequenas rotas fluviais.",

        habitacao:
            "Ocupação limitada por causa das áreas alagadas.",

        estrutura:
            "Estação de tratamento, reservatórios, decantadores, estação de bombeamento e centro de pesquisa."
    },


    {
        id: "R007",
        numero: 7,
        nome: "Encostas Montanhosas Centrais",
        tipo: "montanha",

        relevo:
            "Terreno montanhoso de grande altitude e relevo acidentado.",

        vegetacao:
            "Vegetação de montanha distribuída entre encostas e vales.",

        recursos:
            "Recursos minerais e hídricos.",

        atividade:
            "Mineração, geração de energia e atividades de apoio logístico.",

        transporte:
            "Estradas montanhosas e túneis de conexão.",

        habitacao:
            "Vila residencial destinada principalmente aos trabalhadores da região.",

        estrutura:
            "Área de mineração, vila residencial, usina hidrelétrica, túnel, base logística e reservatório."
    },


    {
        id: "R008",
        numero: 8,
        nome: "Cadeia Montanhosa Norte",
        tipo: "montanha",

        relevo:
            "Cadeia de montanhas elevadas e áreas de difícil acesso.",

        vegetacao:
            "Florestas de montanha e vegetação nativa preservada.",

        recursos:
            "Nascentes, mananciais e biodiversidade.",

        atividade:
            "Preservação ambiental, pesquisa científica e turismo ecológico controlado.",

        transporte:
            "Estradas de acesso controlado e trilhas.",

        habitacao:
            "Ocupação reduzida, concentrada em estruturas de pesquisa e apoio.",

        estrutura:
            "Portal de entrada, centro de visitantes, instituto de pesquisa, refúgio ecológico e trilhas."
    },


    {
        id: "R009",
        numero: 9,
        nome: "Cadeia Montanhosa Sul",
        tipo: "montanha",

        relevo:
            "Área montanhosa localizada na parte sul e oriental do território.",

        vegetacao:
            "Vegetação adaptada às encostas e áreas naturais.",

        recursos:
            "Recursos minerais e áreas estratégicas próximas à costa.",

        atividade:
            "Extração mineral e atividades relacionadas ao aproveitamento dos recursos da região.",

        transporte:
            "Rodovias de acesso às áreas montanhosas e conexão com outras regiões.",

        habitacao:
            "Ocupação reduzida e ligada principalmente às atividades econômicas.",

        estrutura:
            "Estruturas de apoio à atividade mineral e ao transporte regional."
    },


    {
        id: "R010",
        numero: 10,
        nome: "Região Avermelhada Mineralizada",
        tipo: "montanha",

        relevo:
            "Encostas e terrenos caracterizados pelo solo avermelhado.",

        vegetacao:
            "Vegetação menos densa nas áreas utilizadas para extração.",

        recursos:
            "Ferro, hematita, magnetita e outros recursos minerais.",

        atividade:
            "Mineração e processamento de recursos minerais.",

        transporte:
            "Estradas de acesso e rotas para transporte dos materiais extraídos.",

        habitacao:
            "Áreas residenciais limitadas e voltadas aos trabalhadores.",

        estrutura:
            "Complexo de mineração e estruturas de apoio operacional."
    },


    {
        id: "R011",
        numero: 11,
        nome: "Vales Fluviais Orientais",
        tipo: "hidrica",

        relevo:
            "Vales atravessados por cursos de água na porção oriental.",

        vegetacao:
            "Vegetação associada aos rios e vales.",

        recursos:
            "Água e potencial para geração de energia.",

        atividade:
            "Produção de energia hidrelétrica e gestão dos recursos hídricos.",

        transporte:
            "Rodovias que conectam os vales às regiões centrais.",

        habitacao:
            "Pequenos núcleos de trabalhadores próximos às estruturas energéticas.",

        estrutura:
            "Usina hidrelétrica e estruturas de distribuição de energia."
    },


    {
        id: "R012",
        numero: 12,
        nome: "Região Florestal Sul",
        tipo: "florestal",

        relevo:
            "Terreno coberto por extensas áreas naturais na região sul.",

        vegetacao:
            "Floresta densa e áreas de preservação.",

        recursos:
            "Biodiversidade, recursos naturais e recursos hídricos.",

        atividade:
            "Preservação ambiental, pesquisa e monitoramento.",

        transporte:
            "Acesso terrestre controlado e trilhas internas.",

        habitacao:
            "Baixa ocupação humana para reduzir impactos ambientais.",

        estrutura:
            "Centro de preservação, pontos de pesquisa e monitoramento ambiental."
    }

];


/* =========================
   MENU
========================= */

const botoesMenu = document.querySelectorAll(".menu-item");
const paginas = document.querySelectorAll(".page");

botoesMenu.forEach(botao => {

    botao.addEventListener("click", () => {

        const destino = botao.dataset.section;

        abrirSecao(destino);

    });

});


function abrirSecao(id) {

    paginas.forEach(pagina => {
        pagina.classList.remove("active");
    });

    botoesMenu.forEach(botao => {
        botao.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    const botaoAtivo =
        document.querySelector(`[data-section="${id}"]`);

    if (botaoAtivo) {
        botaoAtivo.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   REGIÕES
========================= */

const regionGrid = document.getElementById("regionGrid");


function mostrarRegioes(lista) {

    regionGrid.innerHTML = "";

    lista.forEach(regiao => {

        const card = document.createElement("div");

        card.className = "region-card";

        card.innerHTML = `

            <div class="region-number">
                ${regiao.numero}
            </div>

            <h3>${regiao.nome}</h3>

            <p>
                ${regiao.atividade}
            </p>

            <div class="region-meta">

                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${formatarTipo(regiao.tipo)}
                </span>

                <span>
                    ${regiao.id}
                </span>

            </div>

        `;

        card.addEventListener("click", () => {

            abrirModal(regiao.id);

        });

        regionGrid.appendChild(card);

    });

}


/* =========================
   TABELA
========================= */

const databaseTable =
    document.getElementById("databaseTable");


function mostrarTabela(lista) {

    databaseTable.innerHTML = "";

    lista.forEach(regiao => {

        const linha = document.createElement("tr");

        linha.innerHTML = `

            <td class="table-id">
                ${regiao.id}
            </td>

            <td>
                <strong>${regiao.nome}</strong>
            </td>

            <td>
                ${formatarTipo(regiao.tipo)}
            </td>

            <td>
                ${resumir(regiao.recursos)}
            </td>

            <td>
                ${resumir(regiao.atividade)}
            </td>

            <td>
                ${resumir(regiao.transporte)}
            </td>

            <td>

                <button
                    class="view-button"
                    onclick="abrirModal('${regiao.id}')"
                >
                    <i class="fa-solid fa-eye"></i>
                </button>

            </td>

        `;

        databaseTable.appendChild(linha);

    });

}


/* =========================
   PESQUISA REGIÕES
========================= */

const pesquisaRegiao =
    document.getElementById("pesquisaRegiao");


pesquisaRegiao.addEventListener("input", () => {

    const valor =
        pesquisaRegiao.value.toLowerCase();

    const resultado =
        regioes.filter(regiao =>

            regiao.nome.toLowerCase().includes(valor) ||

            regiao.id.toLowerCase().includes(valor) ||

            regiao.atividade.toLowerCase().includes(valor)

        );

    mostrarRegioes(resultado);

});


/* =========================
   PESQUISA TABELA
========================= */

const pesquisaTabela =
    document.getElementById("pesquisaTabela");

const filtroTipo =
    document.getElementById("filtroTipo");


function filtrarTabela() {

    const pesquisa =
        pesquisaTabela.value.toLowerCase();

    const tipo =
        filtroTipo.value;


    const resultado = regioes.filter(regiao => {

        const correspondePesquisa =

            regiao.nome.toLowerCase().includes(pesquisa) ||

            regiao.id.toLowerCase().includes(pesquisa) ||

            regiao.recursos.toLowerCase().includes(pesquisa) ||

            regiao.atividade.toLowerCase().includes(pesquisa);


        const correspondeTipo =

            tipo === "todos" ||

            regiao.tipo === tipo;


        return correspondePesquisa && correspondeTipo;

    });


    mostrarTabela(resultado);

}


pesquisaTabela.addEventListener(
    "input",
    filtrarTabela
);

filtroTipo.addEventListener(
    "change",
    filtrarTabela
);


/* =========================
   MODAL
========================= */

const modal =
    document.getElementById("modal");

const modalContent =
    document.getElementById("modalContent");


function abrirModal(id) {

    const regiao =
        regioes.find(item => item.id === id);

    if (!regiao) return;


    modalContent.innerHTML = `

        <span class="modal-region-id">
            ${regiao.id} • REGIÃO ${regiao.numero}
        </span>

        <h2>${regiao.nome}</h2>


        <div class="detail-grid">

            ${criarDetalhe(
                "Relevo",
                regiao.relevo,
                "fa-mountain"
            )}

            ${criarDetalhe(
                "Vegetação",
                regiao.vegetacao,
                "fa-leaf"
            )}

            ${criarDetalhe(
                "Recursos naturais",
                regiao.recursos,
                "fa-droplet"
            )}

            ${criarDetalhe(
                "Atividades",
                regiao.atividade,
                "fa-industry"
            )}

            ${criarDetalhe(
                "Rotas e transporte",
                regiao.transporte,
                "fa-road"
            )}

            ${criarDetalhe(
                "Habitação",
                regiao.habitacao,
                "fa-house"
            )}

        </div>


        <div
            class="detail"
            style="margin-top:12px;"
        >

            <span>
                <i class="fa-solid fa-building"></i>
                Estruturas principais
            </span>

            <p>
                ${regiao.estrutura}
            </p>

        </div>

    `;


    modal.classList.add("active");

}


function criarDetalhe(
    titulo,
    texto,
    icone
) {

    return `

        <div class="detail">

            <span>
                <i class="fa-solid ${icone}"></i>
                ${titulo}
            </span>

            <p>
                ${texto}
            </p>

        </div>

    `;

}


function fecharModal() {

    modal.classList.remove("active");

}


modal.addEventListener(
    "click",
    evento => {

        if (evento.target === modal) {
            fecharModal();
        }

    }
);


document.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "Escape") {
            fecharModal();
        }

    }
);


/* =========================
   FUNÇÕES AUXILIARES
========================= */

function formatarTipo(tipo) {

    const nomes = {

        costeira: "Costeira",

        planicie: "Planície",

        montanha: "Montanhosa",

        hidrica: "Hídrica",

        florestal: "Florestal"

    };

    return nomes[tipo] || tipo;

}


function resumir(texto) {

    if (texto.length <= 45) {
        return texto;
    }

    return texto.substring(0, 45) + "...";

}


/* =========================
   INICIALIZAÇÃO
========================= */

mostrarRegioes(regioes);

mostrarTabela(regioes);