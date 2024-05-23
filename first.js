//linking to css file

var link=document.createElement("link");
link.type="text/css";
link.rel="stylesheet";
link.href="https://cdn.jsdelivr.net/gh/alifmahmudsclients/latabledogre.com@09c13bd45d55737f8f578e3af56668e6d686727a/mystyle.css";
document.getElementsByTagName("head")[0].appendChild(link);


//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class="consent-banner-wrapper" style="display: none;">
  <div class="consent-content-area">
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Consentement</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Détails</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">À propos</h3>
      </div>
    </div>
    
    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">
          La Table d'Ogre utilise des cookies (et pas seulement en cuisine !), mais n'intègre aucune publicité.
        </p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <img class="catagoryIcon" width="16px" src="https://icons.veryicon.com/png/o/miscellaneous/data-product-icon-library/arrow-bottom-4.png" alt="">
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Nécessaire</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Les cookies nécessaires contribuent à rendre un site Web utilisable en activant des fonctions de base comme la navigation de page et l'accès aux zones sécurisées du site Web. Le site Web ne peut pas fonctionner correctement sans ces cookies.
            </p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
                <img class="catagoryIcon" width="16px" src="https://icons.veryicon.com/png/o/miscellaneous/data-product-icon-library/arrow-bottom-4.png" alt="">
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Préférences</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Les cookies de préférences permettent à un site Web de se souvenir d'informations qui modifient son comportement ou son apparence, comme votre langue préférée ou la région dans laquelle vous vous trouvez.
            </p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
                <img class="catagoryIcon" width="16px" src="https://icons.veryicon.com/png/o/miscellaneous/data-product-icon-library/arrow-bottom-4.png" alt="">
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Statistiques</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">
              Les cookies statistiques aident les propriétaires de sites Web à comprendre comment les visiteurs interagissent avec les sites Web en collectant et en communiquant des informations de manière anonyme.
            </p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
                <img class="catagoryIcon" width="16px" src="https://icons.veryicon.com/png/o/miscellaneous/data-product-icon-library/arrow-bottom-4.png" alt="">
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Les cookies marketing sont utilisés pour suivre les visiteurs sur plusieurs sites Web. L'objectif est d'afficher des publicités pertinentes et attrayantes pour l'utilisateur individuel, et donc plus précieuses pour les éditeurs et les annonceurs tiers.
            </p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Les cookies sont de petits fichiers texte qui peuvent être utilisés par les sites Web pour améliorer l'expérience utilisateur.</span>
          <span class="sec3Content">
            La loi stipule que nous pouvons stocker des cookies sur votre appareil s'ils sont strictement nécessaires au fonctionnement de ce site. Pour tous les autres types de cookies, nous avons besoin de votre permission. Cela signifie que les cookies classés comme nécessaires sont traités sur la base du GDPR Art. 6 (1) (f). Tous les autres cookies, c'est-à-dire ceux des catégories préférences et marketing, sont traités sur la base du GDPR Art. 6 (1) (a) du RGPD.
          </span>
          <span class="sec3Content">Ce site utilise différents types de cookies. Certains cookies sont placés par des services tiers qui apparaissent sur nos pages.
          </span>
          <span class="sec3Content watermark">Bannière de consentement par <a href="https://alifmahmud.com" target="_blank">alifmahmud.com</a></span>
        </p>
      </div>
    </div>
  </div>

  <div class="consent-action-footer">
    <div class="action-buttons" id="consentActionButtons">
      <button action="accept" class="action-btn active" id="acceptConsentButton">Accepter</button>
      <button action="reject" class="action-btn" id="rejectConsentButton">Rejeter</button>
      <button action="preference" class="action-btn" id="preferenceConsentButton">Préférence</button>
    </div>
  </div>
</div>

<div class="miniConsentBanner" style="display:none">
  <img alt="" src="https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg" width="60px">
</div>

`

document.body.appendChild(consentdiv);

 
  

