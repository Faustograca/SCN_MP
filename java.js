function mostrarConteudo(id) {
    const conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(conteudo => {
      conteudo.style.display = 'none';
    });
  
    const conteudoSelecionado = document.getElementById(id);
    conteudoSelecionado.style.display = 'block';
  }

  

  // calculdora funcoes

  function showCalculation(calculationType) {
    var dynamicContent = document.getElementById('dynamicContent');
  
    // Limpa o conteúdo dinâmico
    dynamicContent.innerHTML = '';
  
    switch (calculationType) {
      case 'potenciaRecebida':
        dynamicContent.innerHTML = '<h3>Calcular Potência Recebida</h3>' +
          '<div class="input-group">' +
          '<label for="paramInput">Pt:</label>' +
          '<input type="number" id="paramInput" placeholder="Inserir">' +
          '<label for="unitSelectPt"><------></label>' +
          '<select id="unitSelectPt">' +
          '<option value="mW">mW</option>' +
          '<option value="W">W</option>' +
          '<option value="kW">kW</option>' +
          '<option value="MW">MW</option>' +
          '<option value="dB">dB</option>' +
          '<option value="dBm">dBm</option>' +
          '</select>' +
          '</div>' +
          '<div class="input-group">' +
          '<label for="parametro2">Gt:</label>' +
          '<input type="number" id="parametro2" placeholder="Inserir">' +
          '<label for="SelectGt"><------></label>' +
          '<select id="SelectGt">' +
          '<option value="mW">mW</option>' +
          '<option value="W">W</option>' +
          '<option value="kW">kW</option>' +
          '<option value="MW">MW</option>' +
          '<option value="dB">dB</option>' +
          '<option value="dBm">dBm</option>' +
          '</select>' +
          '</div>' +
          '<div class="input-group">' +
          '<label for="parametro3">Gr:</label>' +
          '<input type="number" id="parametro3" placeholder="Inserir">' +
          '<label for="unitSelectGr"><------></label>' +
          '<select id="unitSelectGr">' +
          '<option value="mW">mW</option>' +
          '<option value="W">W</option>' +
          '<option value="kW">kW</option>' +
          '<option value="MW">MW</option>' +
          '<option value="dB">dB</option>' +
          '<option value="dBm">dBm</option>' +
          '</select>' +
          '</div>' +
          '<div class="input-group">' +
          '<label for="parametro4">Afs:</label>' +
          '<input type="number" id="parametro4" placeholder="Inserir">' +
          '<label for="unitSelectAfs"><------></label>' +
          '<select id="unitSelectAfs">' +
          '<option value="mW">mW</option>' +
          '<option value="W">W</option>' +
          '<option value="kW">kW</option>' +
          '<option value="MW">MW</option>' +
          '<option value="dB">dB</option>' +
          '<option value="dBm">dBm</option>' +
          '</select>' +
          '</div>' +
          '<div class="input-group">' +
          '<label for="correctionModel">FC:</label>' +
          '<select id="correctionModel">' +
          '<option value="K_al">K_al</option>' +
          '<option value="K_ac">K_ac</option>' +
          '<option value="K_sp">K_sp</option>' +
          '<option value="K_hp">K_hp</option>' +
          '<option value="K_mp">K_mp</option>' +
          '<option value="K_su">K_su</option>' +
          '</select>' +
          '</div>' +
          '<button onclick="addCorrectionFactor()">Adicione</button>' +
          '<div id="correctionFactorsContainer"></div>' +
          '<button onclick="calculatePotenciaRecebida()">Calcular</button>';
        break;
  
      case 'distancia':
        dynamicContent.innerHTML = '<h3>Calcular Distância</h3>' +
          '<div class="input-group">' +
          '<label for="lanbda">Ⲗ</label>' +
          '<input type="number" id="lanbda" placeholder="Inserir">' +
          '<label for="unitSelectl"><------></label>' +
          '<select id="unitSelectl">' +
          '<option value="cm">cm</option>' +
          '<option value="m">m</option>' +
          '<option value="km">km</option>' +
          '<option value="mi">mi</option>' +
          '</select>' +
          '</div>' +

          '<div class="input-group">' +
          '<label for="lf">LFs[W]</label>' +
          '<input type="number" id="lf" placeholder="Inserir">' +
          '<label for="unitSelectlf"><------></label>' +
          '<select id="unitSelectlf">' +
          '<option value="mW">mW</option>' +
          '<option value="W">W</option>' +
          '<option value="kW">kW</option>' +
          '<option value="MW">MW</option>' +
          '<option value="dB">dB</option>' +
          '<option value="dBm">dBm</option>' +
          '</select>' +
          '</div>' +
          
          '<button onclick="calculateDistancia()">Calcular</button>';
        break;
  
      case 'AtenuacaoELIvre':
        dynamicContent.innerHTML = '<h3>Calcular LFs</h3>' +
          '<div class="input-group">' +
          '<label for="lanbda1">F[Hz]</label>' +
          '<input type="number" id="lanbda1" placeholder="Inserir">' +
          '<label for="unitSelectF"><------></label>' +
          '<select id="unitSelectlanbda">' +
          '<option value="Hz">Hz</option>' +
          '<option value="kHz">kHz</option>' +
          '<option value="MHz">MHz</option>' +
          '<option value="GHz">GHz</option>' +
          '</select>' +
          '</div>' +

          '<div class="input-group">' +
          '<label for="D2">D</label>' +
          '<input type="number" id="D2" placeholder="Inserir">' +
          '<label for="unitSelectF"><------></label>' +
          '<select id="unitSelectd">' +
          '<option value="cm">cm</option>' +
          '<option value="m">m</option>' +
          '<option value="km">km</option>' +
          '<option value="mi">mi</option>' +
          '</select>' +
          '</div>' +
    
          '<button onclick="calculateLFs()">Calcular</button>';
          
        break;
      
      case 'PerdaTotal':
        dynamicContent.innerHTML = '<h3>Calcular Lp[dB]</h3>' +
          '<div class="input-group">' +
          '<label for="F1">F[MHz]</label>' +
          '<input type="number" id="F1" placeholder="Inserir">' +
          '<label for="unitSelectF"><------></label>' +
          '<select id="unitSelectF">' +
          '<option value="Hz">Hz</option>' +
          '<option value="kHz">kHz</option>' +
          '<option value="MHz">MHz</option>' +
          '<option value="GHz">GHz</option>' +
          '</select>' +
          '</div>' +
          '<div class="input-group">' +
          '<label for="heb2">heb[m]:</label>' +
          '<input type="number" id="heb2" placeholder="Insirir">' +
          '<label for="unitSelectheb"><------></label>' +
          '<select id="unitSelectheb">' +
          '<option value="cm">cm</option>' +
          '<option value="m">m</option>' +
          '<option value="km">km</option>' +
          '<option value="mm">mm</option>' +
          '</select>' +
          '</div>' +

          '<div class="input-group">' +
          '<label for="hem2">hem[m]:</label>' +
          '<input type="number" id="hem2" placeholder="Insirir">' +
          '<label for="unitSelecthem"><------></label>' +
          '<select id="unitSelecthem">' +
          '<option value="cm">cm</option>' +
          '<option value="m">m</option>' +
          '<option value="km">km</option>' +
          '<option value="mm">mm</option>' +
          '</select>' +
          '</div>' +

          '<div class="input-group">' +
          '<label for="d2">d[m]:</label>' +
          '<input type="number" id="d2" placeholder="Insirir">' +
          '<label for="unitSelectd"><------></label>' +
          '<select id="unitSelectd">' +
          '<option value="cm">cm</option>' +
          '<option value="m">m</option>' +
          '<option value="km">km</option>' +
          '<option value="mm">mm</option>' +
          '</select>' +
          '</div>' +
          
        

          '<div class="input-group">' +
          '<label for="cityTy">H_m:</label>' +
          '<select id="cityTy">' +
          '<option value="cMedia">Cidade Pequena</option>' +
          '<option value="cUrbano">Cidade Grande</option>' +
          '</select>' +
          '</div>' +          
          
              // Substitua a entrada para C_m por um select
          '<div class="input-group">' +
          '<label for="cityType">C_m:</label>' +
          '<select id="cityType">' +
          '<option value="cidadeMedia">Cidade Média</option>' +
          '<option value="centroUrbano">Centro Urbano</option>' +
          '</select>' +
          '</div>' +

          // Adicione um dropdown para selecionar os modelos
          '<label for="correctionModel">Fatores de Correção:</label>' +
          '<select id="correctionModel">' +
          '<option value="K_al">K_al</option>' +
          '<option value="K_ac">K_ac</option>' +
          '<option value="K_sp">K_sp</option>' +
          '<option value="K_hp">K_hp</option>' +
          '<option value="K_mp">K_mp</option>' +
          '<option value="K_su">K_su</option>' +
          '<!-- Adicione mais opções conforme necessário -->' +
          '</select>' +
          
          '<button onclick="addCorrectionFactor()">Adicione</i></button>' +
          
          '<div id="correctionFactorsContainer"></div>' + // Container para os fatores de correção adicionados
          
          
          // Certifique-se de chamar a função correta no botão
           '<button onclick="calculatePerdaTotal()">Calcular</button>';
        break;
  
      // Adicione mais casos conforme necessário para outros links da barra de tarefas
    }
  }
  
  function addCorrectionFactor() {
    var correctionModel = document.getElementById('correctionModel').value;
    
    // Crie um novo elemento div para o fator de correção
    var newCorrectionFactorDiv = document.createElement('div');

    // Adicione campos de entrada para o valor do fator de correção
    newCorrectionFactorDiv.innerHTML =
        '<label for="correctionValue_' + correctionModel + '">Valor para ' + correctionModel + ':</label>' +
        '<input type="number" id="correctionValue_' + correctionModel + '" placeholder="Inserir">' +
        '<button onclick="removeCorrectionFactor(this)" class="remove-icon-button"><i class="material-icons">remove</i></button>';

    // Adicione o novo fator de correção ao container
    var correctionFactorsContainer = document.getElementById('correctionFactorsContainer');
    correctionFactorsContainer.appendChild(newCorrectionFactorDiv);
}

function removeCorrectionFactor(button) {
  // Obtém o elemento pai (o div que contém o fator de correção)
  var correctionFactorDiv = button.parentNode;

  // Remove o div do container
  var correctionFactorsContainer = document.getElementById('correctionFactorsContainer');
  correctionFactorsContainer.removeChild(correctionFactorDiv);

   // Recalcula a potência recebida após a remoção
   calculatePotenciaRecebida();
   calculatePerdaTotal();
}



function calculatePotenciaRecebida() {
  var PtValue = parseFloat(document.getElementById('paramInput').value);
  var PtUnit = document.getElementById('unitSelectPt').value;
  var Gt = parseFloat(document.getElementById('parametro2').value);
  var GtUnit = document.getElementById('SelectGt').value;
  var Gr = parseFloat(document.getElementById('parametro3').value);
  var GrUnit = document.getElementById('unitSelectGr').value;
  var Afs = parseFloat(document.getElementById('parametro4').value);
  var AfsUnit = document.getElementById('unitSelectAfs').value;

  if (isNaN(PtValue) || isNaN(Gt) || isNaN(Gr) || isNaN(Afs)) {
      alert('Por favor, insira valores numéricos válidos para todos os parâmetros.');
      return;
  }
  

  // Converta a unidade Pt para Watts apenas se não estiver em Watts
  var PtInWatts = PtUnit === 'dB' ? PtValue : convertToWatts(PtValue, PtUnit);

  // Converta a unidade Gt para Watts ou dB conforme a unidade selecionada
  var GtConverted = GtUnit === 'dB' ? Gt : convertToDb(Gt, GtUnit);

  // Converta a unidade Gr para decibeis ou dB conforme a unidade selecionada
  var GrConverted = GrUnit === 'dB' ? Gr : convertToDbgr(Gr, GrUnit);

  // Converta a unidade Afs para decibeis ou dB conforme a unidade selecionada
  var AfsConverted = AfsUnit === 'dB' ? Afs : convertToDbAfs(Afs, AfsUnit);

  var correctionFactorsContainer = document.getElementById('correctionFactorsContainer');
  var correctionValueInputs = correctionFactorsContainer.querySelectorAll('input[type="number"]');
  var totalCorrection = 0;

  correctionValueInputs.forEach(function (input) {
      var correctionValue = parseFloat(input.value) || 0;
      totalCorrection += correctionValue;
  });

  var Pr = PtInWatts + GtConverted  + GrConverted - AfsConverted + totalCorrection;
  

  var resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '<p>A potência recebida (Pr) é: ' + Pr + ' dB</p>';
}

function convertToWatts(value, unit) {
  switch (unit) {
      case 'mW':
          return 10* Math.log10(value / 1000);
      case 'kW':
          return 10* Math.log10(value * 1000);
      case 'MW':
          return 10* Math.log10(value * 1000000);
      case 'W':
          return 10* Math.log10(value);
      case 'dBm':
          return value - 30;
      default:
          return value;
  }
}


function convertToDb(value, unit) {
  switch (unit) {
      case 'mW':
          return 10* Math.log10(value / 1000);
      case 'kW':
          return 10* Math.log10(value * 1000);
      case 'MW':
          return 10* Math.log10(value * 1000000);
      case 'W':
          return 10* Math.log10(value);
      case 'dBm':
          return value - 30;
      default:
      return value;
  }
}

function convertToDbgr(value, unit) {
  switch (unit) {
      case 'mW':
          return 10* Math.log10(value / 1000);
      case 'kW':
          return 10* Math.log10(value * 1000);
      case 'MW':
          return 10* Math.log10(value * 1000000);
      case 'W':
          return 10* Math.log10(value);
      case 'dBm':
          return value - 30;
      default:
      return value;
  }
}

function convertToDbAfs(value, unit) {
  switch (unit) {
    case 'mW':
      return 10* Math.log10(value / 1000);
    case 'kW':
      return 10* Math.log10(value * 1000);
    case 'MW':
      return 10* Math.log10(value * 1000000);
    case 'W':
      return 10* Math.log10(value);
    case 'dBm':
      return value - 30;
    default:
      return value;
  }
}

function calculatePerdaTotal() {
  var F = parseFloat(document.getElementById('F1').value);
  var FUnit = document.getElementById('unitSelectF').value;
  var heb = parseFloat(document.getElementById('heb2').value);
  var hebUnit = document.getElementById('unitSelectheb').value;
  var hem = parseFloat(document.getElementById('hem2').value);
  var hemUnit = document.getElementById('unitSelecthem').value;
  var d = parseFloat(document.getElementById('d2').value);
  var dUnit = document.getElementById('unitSelectd').value;
  //var Hm = parseFloat(document.getElementById('parametro2').value);
  //var HmUnit = document.getElementById('unitSelectHm').value;
  var cityType = document.getElementById('cityType').value;
  var cityTy = document.getElementById('cityTy').value;

  if (isNaN(F) || isNaN(heb) || isNaN(d) ) {
    alert('Por favor, insira valores numéricos válidos para todos os parâmetros.');
    return;
  }



  // Converta as unidades conforme necessário
 // Converta a unidade Pt para Watts apenas se não estiver em Watts
 var FInHz = FUnit === 'MHz' ? F : convertToMHz(F, FUnit);
 var hebInm = hebUnit === 'm' ? heb : convertTometro(heb, hebUnit);
 var hemInm = hemUnit === 'm' ? hem : convertTometro(hem, hemUnit);
 var dInkm = dUnit === 'km' ? d : convertTokm(d, dUnit);

 if (isNaN(FInHz) || FInHz< 150 || FInHz > 2000) {
  alert('A expressão de Hata foi alargada por [COST 231, 1999] para f ∈[150, 2000] MHz.');
  return;
}

  var correctionFactorsContainer = document.getElementById('correctionFactorsContainer');
  var correctionValueInputs = correctionFactorsContainer.querySelectorAll('input[type="number"]');
  var totalCorrection = 0;

  correctionValueInputs.forEach(function (input) {
    var correctionValue = parseFloat(input.value) || 0;
    totalCorrection += correctionValue;
  });


  // Lógica para calcular Hm com base no tipo de cidade
var Hm;
if (cityTy === 'cMedia') {
  // Cálculo padrão para cidade média
  Hm = (1.10 * Math.log10(FInHz) - 0.70) * hebInm - (1.56 * Math.log10(FInHz) - 0.8);
} else if (cityTy === 'cUrbano') {
  // Adicione condições específicas para calcular Hm na cidade urbana
  if (FInHz <= 200) {
    Hm = 8.29 * Math.pow(Math.log10(1.54 * hemInm), 2) - 1.10;
  } else if (FInHz >= 400) {
    Hm = 3.20 * Math.pow(Math.log10(11.75 * hemInm), 2) - 4.97;
  } else {
    alert('Escolha uma F[Hz] válido < 200MHz e > 400MHz.');
    return;
  }
} else {
  alert('Escolha um tipo de cidade válido.');
  return;
}


  // Adicione perdas específicas com base no tipo de cidade
  if (cityType === 'cidadeMedia') {
    // Adicione perdas específicas para cidade média, se necessário
    Cm =  0; // Exemplo: adicione 5 dB para cidade média
  } else if (cityType === 'centroUrbano') {
    // Adicione perdas específicas para centro urbano, se necessário
    Cm = 3; 
  }

  var Lp = 46.30 + 33.9 * Math.log10(FInHz) - 13.82 * Math.log10(hebInm) +
          (44.9 - 6.66 * Math.log10(hebInm)) * Math.log10(dInkm) - Hm + Cm - totalCorrection;
  var resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '<p>A perda total (Lp) é: ' + Lp + ' dB</p>';
}

function convertToMHz(value, unit) {
  switch (unit) {
    case 'Hz':
      return  value / 1000000;
    case 'kHz':
      return value / 1000;
    case 'GHz':
      return value * 1000;
    default:
      return value;
  }
}

function convertTometro(value, unit) {
  switch (unit) {
    case 'cm':
      return  value /100;
    case 'km':
      return value * 1000;
    case 'mm':
      return value / 1000;
    default:
      return value;
  }
}

function convertTokm(value, unit) {
  switch (unit) {
    case 'cm':
      return  value /100000;
    case 'm':
      return value / 1000;
    case 'mm':
      return value / 1000000;
    default:
      return value;
  }
}



  
function calculateLFs() {
  var lanbda = parseFloat(document.getElementById('lanbda1').value);
  var lanbdaUnit = document.getElementById('unitSelectlanbda').value;
  var D = parseFloat(document.getElementById('D2').value);
  var DUnit = document.getElementById('unitSelectd').value;

  if (isNaN(lanbda) || isNaN(D)) {
    alert('Por favor, insira valores numéricos válidos para todos os parâmetros.');
    return;
  }

  // Converta as unidades conforme necessário
  var freguenciaInHz = lanbdaUnit === 'Hz' ? lanbda : convertToHz(lanbda, lanbdaUnit);
  var DInMeters = convertTometro(D, DUnit);


  var lanbda1 = 300000000 / freguenciaInHz;
  var pi = Math.PI;
  var LFs = Math.pow((lanbda1 / (4 * pi * DInMeters)), 2);
  // Exiba os resultados
  var resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '<p>A atenuação(LFs) é: ' + LFs + 'W</p>';

}

function convertToHz(value, unit) {
  switch (unit) {
    case 'MHz':
      return  value * 1000000;
    case 'kHz':
      return value * 1000;
    case 'GHz':
      return value * 1000000000;
    default:
      return value;
  }
}

function calculateDistancia() {
  var lanbda = parseFloat(document.getElementById('lanbda').value);
  var lanbdaUnit = document.getElementById('unitSelectl').value;
  var LFs = parseFloat(document.getElementById('lf').value);
  var LFsUnit = document.getElementById('unitSelectlf').value;

  if (isNaN(lanbda) || isNaN(LFs)) {
      alert('Por favor, insira valores numéricos válidos para todos os parâmetros.');
      return;
  }

  // Converta as unidades conforme necessário
  var lanbdaInMeters = convertTometro(lanbda, lanbdaUnit);
  var LFSinWatss = convertToLFSWatts(LFs, LFsUnit);

  
  var distancia = lanbdaInMeters / (4 * Math.PI * Math.sqrt(LFSinWatss));

  // Exiba os resultados
  var resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '<p>A distância é: ' + distancia + ' metros</p>';
}

function convertToLFSWatts(value, unit) {
  switch (unit) {
      case 'mW':
          return value / 1000; // Converta de mW para Watts
      case 'kW':
          return value * 1000; // Converta de kW para Watts
      case 'MW':
          return value * 1000000; // Converta de MW para Watts
      case 'W':
          return value; // Já está em Watts
      case 'dBm':
          return Math.pow(10, (value - 30) / 10); // Converta de dBm para Watts
      case 'dB':
          return Math.pow(10, value / 10); // Converta de dB para Watts
      default:
          return value;
  }
}

