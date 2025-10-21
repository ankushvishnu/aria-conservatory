// src/components/ZohoJSForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  fallbackLink?: string;
  className?: string;
}

export default function ZohoJSForm({
  fallbackLink = "https://forms.zohopublic.in/ariaconservatoryofmusic1/form/ContactUs/formperma/VqtYwSTJORxVAaORUPJMdK44iseAI9RKePDna-qzp60",
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  /**
   * EMBED_SNIPPET
   * Paste the exact JS embed snippet from Zoho here — I've inserted the snippet you provided.
   * Keep the wrapper <div> and <script> tags.
   */
  const EMBED_SNIPPET = `
<div id="zf_div_VqtYwSTJORxVAaORUPJMdK44iseAI9RKePDna-qzp60">
</div>
<script type="text/javascript">
(function() {
	try{
		var f = document.createElement("iframe");
		
			var ifrmSrc = 'https://forms.zohopublic.in/ariaconservatoryofmusic1/form/ContactUs/formperma/VqtYwSTJORxVAaORUPJMdK44iseAI9RKePDna-qzp60?zf_rszfm=1';
		
		
        try{
			if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
				for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				    var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				    utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
				    var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
				    if ( typeof utmVal !== "undefined" ) {
				      if ( utmVal != "" ) {
				        if(ifrmSrc.indexOf('?') > 0){
				             ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
				        }else{
				            ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
				        }
				      }
				    }
				}
			}
			if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
				for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
		        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
		        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
			        if ( typeof utmVal !== "undefined" ) {
			          if ( utmVal != "" ){
			            if(ifrmSrc.indexOf('?') > 0){
			              ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;//No I18N
			            }else{
			              ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;//No I18N
			            }
			          }
			        }
		      	}
			}
		}catch(e){}
		
		f.src = ifrmSrc;
		f.style.border="none";
		f.style.height="1000px";
		f.style.width="90%";
		f.style.transition="all 0.5s ease";
		f.setAttribute("aria-label", 'Contact Us');
		
		var d = document.getElementById("zf_div_VqtYwSTJORxVAaORUPJMdK44iseAI9RKePDna-qzp60");
		d.appendChild(f);
		window.addEventListener('message', function (){
			var evntData = event.data;
			if( evntData && evntData.constructor == String ){
				var zf_ifrm_data = evntData.split("|");
				if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
					var zf_perma = zf_ifrm_data[0];
					var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
					var iframe = document.getElementById("zf_div_VqtYwSTJORxVAaORUPJMdK44iseAI9RKePDna-qzp60").getElementsByTagName("iframe")[0];
					if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
						var prevIframeHeight = iframe.style.height;
						var zf_tout = false;
						if( zf_ifrm_data.length == 3 ) {
						    iframe.scrollIntoView();
						    zf_tout = true;
						}

						if ( prevIframeHeight != zf_ifrm_ht_nw ) {
							if( zf_tout ) {
							    setTimeout(function(){
							        iframe.style.height = zf_ifrm_ht_nw;
							    },500);
							} else {
							    iframe.style.height = zf_ifrm_ht_nw;
							}
						}
					}
				}
			}
		}, false);
    }catch(e){}
})();
</script>
  `;

  // Replace and re-run scripts inside the container so inline scripts execute
  function runScriptsInElement(el: HTMLElement) {
    const scripts = Array.from(el.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      // copy attributes
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
      // copy inline content if any
      newScript.text = oldScript.innerHTML;
      // replace
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let observer: IntersectionObserver | null = null;

    const startLoad = () => {
      if (loaded) return;
      setLoaded(true);

      try {
        node.innerHTML = EMBED_SNIPPET;
        // ensure scripts execute
        runScriptsInElement(node);
      } catch (err) {
        console.error("Zoho embed load error:", err);
        setErrored(true);
      }
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            startLoad();
            observer?.disconnect();
          }
        },
        { rootMargin: "300px" }
      );
      observer.observe(node);
    } else {
      startLoad();
    }

    return () => {
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return (
    <div className={`zoho-js-embed ${className}`}>
      <div ref={containerRef} />
      {!loaded && <div className="mt-4 text-sm opacity-80">Loading form…</div>}
      {errored && (
        <div className="mt-4 text-sm text-red-300">
          The form could not be loaded here.{" "}
          <a href={fallbackLink} target="_blank" rel="noopener noreferrer" className="underline">
            Open the booking form in a new tab
          </a>
          .
        </div>
      )}
    </div>
  );
}
