const ICONS = {
  home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  overview:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>`,
  list:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
  users:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  card:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`,
  link:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.07 0l1.93-1.93a5 5 0 0 0-7.07-7.07L10.5 5.43M14 11a5 5 0 0 0-7.07 0l-1.93 1.93a5 5 0 0 0 7.07 7.07L13.5 18.57"/></svg>`,
  check:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>`,
  clock:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  bank:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M4 21V9l8-6 8 6v12M9 21v-8h6v8"/></svg>`,
  upi:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l4-8 4 8-4 8z"/><path d="M12 12l4-8 4 8-4 8z"/></svg>`,
  cash:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>`,
  x:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  empty:`<svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M3 11h18M8 3v6M16 3v6"/></svg>`,
  back:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>`,
  copy:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  plus:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  info:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  file:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
  download:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>`,
  share:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>`,
  shield:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg>`,
  money:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 8h4a2 2 0 1 1 0 4H9m0 0h4a2 2 0 1 1 0 4H9m3-8v8"/></svg>`,
  lock:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`,
  trash:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>`,
  image:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
  arrowUp:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>`,
  arrowDown:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>`,
  calendar:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
  chart:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="14" width="3" height="4"/></svg>`,
  upload:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15V3"/><path d="M7 8l5-5 5 5"/><path d="M5 21h14"/></svg>`,
};

const SPECIALTIES = ['General Physician','Cardiologist','Dermatologist','Pediatrician','Orthopedic','Gynecologist','Dentist','ENT Specialist','Neurologist','Psychiatrist','Psychologist','Urologist','Nephrologist','Gastroenterologist','Endocrinologist','Pulmonologist','Oncologist','Ophthalmologist','Rheumatologist','General Surgeon','Neurosurgeon','Plastic Surgeon','Radiologist','Anesthesiologist','Physiotherapist','Dietitian / Nutritionist','Ayurvedic Doctor','Homeopathic Doctor','Sexologist','IVF / Fertility Specialist','Pediatric Surgeon'];
const STRINGS = {
  hi: {
    selectDate:'तारीख चुनें', selectTime:'समय चुनें', changeDate:'तारीख बदलें', changeSlot:'स्लॉट बदलें',
    yourDetails:'आपकी जानकारी', bookingFor:'किसके लिए बुक करें', fullName:'पूरा नाम', phoneNumber:'फ़ोन नंबर',
    age:'उम्र (वैकल्पिक)', reasonForVisit:'आने का कारण (वैकल्पिक)', attachDocs:'दस्तावेज़ जोड़ें (वैकल्पिक)',
    attachDocument:'दस्तावेज़ जोड़ें', continueToPay:'भुगतान के लिए आगे बढ़ें', previewNote:'प्रीव्यू मोड में बुकिंग सबमिट नहीं होती',
    bookNewAppointment:'नई अपॉइंटमेंट बुक करें', familyMembers:'परिवार के सदस्य', addMember:'सदस्य जोड़ें', self:'स्वयं',
    myAppointments:'मेरी अपॉइंटमेंट्स', noAppointments:'अभी कोई अपॉइंटमेंट नहीं', myDocuments:'मेरे दस्तावेज़',
    addDocument:'दस्तावेज़ जोड़ें', noDocuments:'अभी कोई दस्तावेज़ नहीं', rateExperience:'अपना अनुभव रेट करें',
    submitReview:'रिव्यू सबमिट करें', updateReview:'रिव्यू अपडेट करें', patientReviews:'मरीज़ों के रिव्यू',
    noReviews:'अभी कोई रिव्यू नहीं है', checkBooked:'पहले से बुक किया है? अपनी अपॉइंटमेंट देखें', linkOnlyFor:'यह लिंक सिर्फ़ इसके लिए है',
    reschedule:'रीशेड्यूल करें', allSlotsFull:'आज के सभी स्लॉट फुल हैं', joinWaitlist:'वेटलिस्ट में नाम लिखवाएं',
    onWaitlist:'✓ आप इस दिन की वेटलिस्ट में हैं', waitlistNote:'स्लॉट खाली होते ही क्लिनिक आपसे संपर्क करेगी',
    reviewBanner:'आपकी विज़िट पूरी हो चुकी है — कृपया अपना अनुभव साझा करें', writeReview:'रिव्यू लिखें',
    langToggle:'English',
  },
  en: {
    selectDate:'Select Date', selectTime:'Select Time', changeDate:'Change Date', changeSlot:'Change Slot',
    yourDetails:'Your Details', bookingFor:'Booking For', fullName:'Full Name', phoneNumber:'Phone Number',
    age:'Age (optional)', reasonForVisit:'Reason for visit (optional)', attachDocs:'Attach Documents (optional)',
    attachDocument:'Attach Document', continueToPay:'Continue to Pay', previewNote:'Booking is not submitted in preview mode',
    bookNewAppointment:'Book New Appointment', familyMembers:'Family Members', addMember:'Add Member', self:'Self',
    myAppointments:'My Appointments', noAppointments:'No appointments yet', myDocuments:'My Documents',
    addDocument:'Add Document', noDocuments:'No documents yet', rateExperience:'Rate Your Experience',
    submitReview:'Submit Review', updateReview:'Update Review', patientReviews:'Patient Reviews',
    noReviews:'No reviews yet', checkBooked:'Already booked? Check your appointment', linkOnlyFor:'This link is only for',
    reschedule:'Reschedule', allSlotsFull:'All slots are full for this day', joinWaitlist:'Join the waitlist',
    onWaitlist:'✓ You are on the waitlist for this day', waitlistNote:'Clinic will contact you as soon as a slot opens up',
    reviewBanner:'Your visit is complete — please share your experience', writeReview:'Write a Review',
    langToggle:'हिंदी',
  },
};
function t(key){ return (STRINGS[ui.lang||'hi'] || STRINGS.hi)[key] || key; }

/* ================= STATE ================= */
function toast(msg){
  const t = document.getElementById('toast');
  t.innerHTML = ICONS.check+'<span>'+msg+'</span>';
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 3200);
}
function starsDisplay(avg){
  let out = '';
  for(let i=1;i<=5;i++){ out += i<=Math.round(avg) ? '★' : '☆'; }
  return out;
}
function barChartHtml(data, opts){
  opts = opts || {};
  const max = Math.max(...data.map(d=>d.value), 1);
  const maxH = 130;
  return `<div class="chart-wrap">${data.map(d=>{
    const h = d.value>0 ? Math.max(6, Math.round((d.value/max)*maxH)) : 2;
    return `
      <div class="chart-bar-col">
        <div class="chart-bar-val">${opts.prefix||''}${d.value}</div>
        <div class="chart-bar-track"><div class="chart-bar ${opts.color||''}" style="height:${h}px;"></div></div>
        <div class="chart-bar-label">${d.label}</div>
      </div>`;
  }).join('')}</div>`;
}
function fileSizeLabel(bytes){
  if(bytes<1024) return bytes+' B';
  if(bytes<1024*1024) return (bytes/1024).toFixed(1)+' KB';
  return (bytes/1024/1024).toFixed(2)+' MB';
}
function downloadDataUrl(dataUrl, filename){
  const a = document.createElement('a');
  a.href = dataUrl; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
}

/* ---- robust copy ---- */
function copyText(text, onDone){
  const done = (ok)=>{ if(onDone) onDone(ok); };
  if(navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext){
    navigator.clipboard.writeText(text).then(()=>{ toast('Link copied!'); done(true); }).catch(()=>fallbackCopy());
  } else {
    fallbackCopy();
  }
  function fallbackCopy(){
    try{
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      const success = document.execCommand('copy');
      ta.remove();
      if(success){ toast('Link copied!'); done(true); }
      else { done(false); }
    }catch(e){ done(false); }
  }
}
function shareOrCopyLink(url, title, openHash){
  const root = document.getElementById('modal-root');
  const canShare = !!navigator.share;
  root.innerHTML = `
    <div class="modal-backdrop"><div class="modal">
      <button class="modal-close" id="lm-close">${ICONS.x}</button>
      <h3>${title || 'Booking Link'}</h3>
      <div class="sub">Ye link share karein</div>
      <input readonly value="${url}" id="lm-link-box" onclick="this.select()"
        style="width:100%; border:1px solid var(--border); border-radius:10px; padding:12px; font-family:'IBM Plex Mono',monospace; font-size:12.5px; background:var(--bg); margin-bottom:16px;">
      <div class="modal-actions" style="flex-direction:column; gap:10px;">
        <button class="btn btn-coral btn-block" id="lm-copy">${ICONS.copy} Copy Link</button>
        ${canShare ? `<button class="btn btn-outline btn-block" id="lm-share">${ICONS.share} Share via Apps</button>` : ''}
        ${openHash ? `<button class="btn btn-ghost btn-block" id="lm-open">${ICONS.link} Open This Link Now</button>` : ''}
      </div>
      <div style="font-size:12px; color:var(--ink-soft); margin-top:14px;">Agar Copy button kaam na kare, to upar wale box par tap karke text ko select karein aur manually copy kar lein.</div>
    </div></div>
  `;
  document.getElementById('lm-close').addEventListener('click', ()=>{ root.innerHTML=''; });
  document.getElementById('lm-copy').addEventListener('click', ()=>{
    copyText(url, (ok)=>{ if(!ok) toast('Copy nahi hua — box se manually select karke copy karein'); });
  });
  const shareBtn = document.getElementById('lm-share');
  if(shareBtn) shareBtn.addEventListener('click', ()=>{
    navigator.share({ title: title||'AppointoDoc Link', url }).catch(()=>{});
  });
  const openBtn = document.getElementById('lm-open');
  if(openBtn) openBtn.addEventListener('click', ()=>{
    root.innerHTML='';
    location.hash = openHash;
  });
}

/* ================= ROUTER ================= */
function historyTile(h){
  const rxCount = (h.prescription||'').split('\n').filter(Boolean).length;
  return `
    <div class="tile" data-open-history="${h.id}">
      <div class="tile-icon c-history">${ICONS.file}</div>
      <div class="tile-title">${h.diagnosis||'General visit'}</div>
      <div class="tile-sub">${niceDate(h.date)}</div>
      ${rxCount ? `<span class="tile-badge status-completed">${rxCount} Rx</span>` : ''}
    </div>
  `;
}

function openHistoryModal(doc, prefill){
  const root = document.getElementById('modal-root');
  const pf = prefill ? { name: prefill.patientName!=null?unesc(prefill.patientName):(prefill.name||''), phone: prefill.patientPhone!=null?prefill.patientPhone:(prefill.phone||''), age: prefill.patientAge!=null?prefill.patientAge:(prefill.age||''), gender: prefill.patientGender!=null?prefill.patientGender:(prefill.gender||'') } : {name:'',phone:'',age:'',gender:''};
  const pastForDoc = state.histories.filter(h=>h.doctorId===doc.id);
  const diagList = [...new Set(pastForDoc.map(h=>(h.diagnosis||'').trim()).filter(Boolean))];
  const medList = [...new Set(pastForDoc.flatMap(h=>(h.prescription||'').split('\n').map(s=>s.trim()).filter(Boolean)))];
  root.innerHTML = `
    <div class="modal-backdrop"><div class="modal wide">
      <button class="modal-close" id="close-m">${ICONS.x}</button>
      <h3>Add Patient History Note</h3>
      <div class="sub">${doc.name} ke liye patient record — save karne ke baad prescription slip milegi</div>
      <div class="field-row">
        <div class="field"><label>Patient Name</label><input id="hn-name" placeholder="Patient ka naam" value="${esc(pf.name)}"></div>
        <div class="field"><label>Phone Number</label><input id="hn-phone" placeholder="10-digit mobile" value="${esc(pf.phone)}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Age</label><input id="hn-age" type="number" placeholder="e.g. 34" value="${esc(String(pf.age||''))}"></div>
        <div class="field"><label>Gender</label>
          <select id="hn-gender"><option value="">Select</option><option ${pf.gender==='Male'?'selected':''}>Male</option><option ${pf.gender==='Female'?'selected':''}>Female</option><option ${pf.gender==='Other'?'selected':''}>Other</option></select>
        </div>
        <div class="field"><label>Date</label><input type="date" id="hn-date" value="${todayStr()}"></div>
      </div>
      <div class="field"><label>Vitals (optional)</label><input id="hn-vitals" placeholder="e.g. BP 120/80, Pulse 76, Wt 68kg"></div>
      <div class="field" style="position:relative;"><label>Diagnosis</label><input id="hn-diag" placeholder="e.g. Viral fever" autocomplete="off"><div id="hn-diag-sugg" class="autosuggest-box" style="display:none;"></div></div>
      <div class="field" style="position:relative;"><label>Prescription (Rx) — ek line me ek dawa</label><textarea id="hn-presc" placeholder="Tab. Paracetamol 650mg — 1-0-1 x 3 days&#10;Tab. Cetrizine — 0-0-1 x 5 days"></textarea><div id="hn-presc-sugg" class="autosuggest-box" style="display:none;"></div></div>
      <div class="field"><label>Advice (optional)</label><textarea id="hn-advice" placeholder="e.g. Rest, plenty of fluids, follow-up in 3 days"></textarea></div>
      <div class="field"><label>Additional Notes</label><textarea id="hn-notes" placeholder="Additional notes..."></textarea></div>
      <button class="btn btn-coral btn-block" id="save-note">Save & Generate Slip</button>
    </div></div>
  `;
  document.getElementById('close-m').addEventListener('click', ()=>{ root.innerHTML=''; });

  function wireSuggest(inputEl, boxEl, list, opts){
    opts = opts || {};
    const getQuery = opts.getQuery || (()=>inputEl.value);
    const apply = opts.apply || ((val)=>{ inputEl.value = val; });
    inputEl.addEventListener('input', ()=>{
      const q = (getQuery()||'').trim().toLowerCase();
      if(!q){ boxEl.style.display='none'; return; }
      const matches = list.filter(m=>m.toLowerCase().includes(q) && m.toLowerCase()!==q).slice(0,6);
      if(!matches.length){ boxEl.style.display='none'; return; }
      boxEl.innerHTML = matches.map(m=>`<div class="autosuggest-item">${esc(m)}</div>`).join('');
      boxEl.style.display='block';
    });
    boxEl.addEventListener('click', (e)=>{
      const item = e.target.closest('.autosuggest-item'); if(!item) return;
      apply(item.textContent); boxEl.style.display='none'; inputEl.focus();
    });
    document.addEventListener('click', (e)=>{ if(e.target!==inputEl && !boxEl.contains(e.target)) boxEl.style.display='none'; });
  }

  wireSuggest(document.getElementById('hn-diag'), document.getElementById('hn-diag-sugg'), diagList);

  const presc = document.getElementById('hn-presc');
  wireSuggest(presc, document.getElementById('hn-presc-sugg'), medList, {
    getQuery: ()=>{ const lines=presc.value.split('\n'); return lines[lines.length-1]; },
    apply: (val)=>{ const lines=presc.value.split('\n'); lines[lines.length-1]=val; presc.value=lines.join('\n')+'\n'; }
  });

  document.getElementById('save-note').addEventListener('click', ()=>{
    const name = document.getElementById('hn-name').value.trim();
    const phone = document.getElementById('hn-phone').value.trim();
    if(!name || !phone){ toast('Naam aur phone number daalein'); return; }
    const entry = {
      id:uid(), doctorId:doc.id, patientName:name, patientPhone:phone,
      patientAge: document.getElementById('hn-age').value.trim(),
      patientGender: document.getElementById('hn-gender').value,
      date: document.getElementById('hn-date').value || todayStr(),
      vitals: document.getElementById('hn-vitals').value.trim(),
      diagnosis: document.getElementById('hn-diag').value.trim()||'General visit',
      prescription: document.getElementById('hn-presc').value.trim(),
      advice: document.getElementById('hn-advice').value.trim(),
      notes: document.getElementById('hn-notes').value.trim()
    };
    state.histories.push(entry);
    saveState(); root.innerHTML='';
    ui.selectedPatientPhone = phone;
    renderAdmin();
    toast('History record saved');
    openSlipModal(doc, entry);
  });
}

function openFeeManagerModal(doc){
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop"><div class="modal wide">
      <button class="modal-close" id="close-m">${ICONS.x}</button>
      <h3>Manage Fees</h3>
      <div class="sub">Yahin se fee add, edit ya delete karein — pehli fee patient booking me use hoti hai</div>
      <div class="tile-grid">
        ${(doc.fees||[]).map(f=>`
          <div class="tile" data-mgr-fee="${f.id}">
            <div class="tile-icon" style="background:var(--mint-soft); color:var(--teal);">${ICONS.money}</div>
            <div class="tile-title">${f.label}</div>
            <div class="tile-amt income">₹${f.amount}</div>
          </div>
        `).join('')}
        <div class="tile" id="mgr-fee-add" style="border-style:dashed;">
          <div class="tile-icon" style="background:var(--bg); color:var(--ink-soft);">${ICONS.plus}</div>
          <div class="tile-title">Add Fee</div>
        </div>
      </div>
    </div></div>
  `;
  document.getElementById('close-m').addEventListener('click', ()=>{ root.innerHTML=''; });
  document.getElementById('mgr-fee-add').addEventListener('click', ()=>openFeeModal(doc, null));
  root.querySelectorAll('[data-mgr-fee]').forEach(el=>el.addEventListener('click', ()=>openFeeModal(doc, el.dataset.mgrFee)));
}
function openFeeModal(doc, feeId){
  const existing = feeId ? doc.fees.find(f=>f.id===feeId) : null;
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop"><div class="modal">
      <button class="modal-close" id="close-m">${ICONS.x}</button>
      <h3>${existing ? 'Edit Fee' : 'Add Fee'}</h3>
      <div class="sub">${existing ? 'Fee ka naam ya amount update karein' : 'Naya fee / service type add karein'}</div>
      <div class="field"><label>Label</label><input id="fee-label" placeholder="e.g. Consultation, Follow-up, Home Visit" value="${existing?existing.label:''}"></div>
      <div class="field"><label>Amount (₹)</label><input id="fee-amount" type="number" placeholder="e.g. 500" value="${existing?existing.amount:''}"></div>
      <div class="modal-actions">
        ${existing ? `<button class="btn btn-danger" style="flex:1;" id="fee-delete">${ICONS.trash} Delete</button>` : ''}
        <button class="btn btn-coral" style="flex:1;" id="fee-save">Save</button>
      </div>
    </div></div>
  `;
  document.getElementById('close-m').addEventListener('click', ()=>{ root.innerHTML=''; });
  document.getElementById('fee-save').addEventListener('click', ()=>{
    const label = document.getElementById('fee-label').value.trim();
    const amount = Number(document.getElementById('fee-amount').value);
    if(!label || !amount || amount<=0){ toast('Label aur sahi amount daalein'); return; }
    if(existing){ existing.label = label; existing.amount = amount; }
    else{ doc.fees.push({id:uid(), label, amount}); }
    doc.fee = doc.fees[0].amount;
    saveState(); root.innerHTML=''; renderAdmin(); toast('Fee saved');
  });
  const delBtn = document.getElementById('fee-delete');
  if(delBtn) delBtn.addEventListener('click', ()=>{
    if(doc.fees.length<=1){ toast('Kam se kam ek fee zaroori hai'); return; }
    doc.fees = doc.fees.filter(f=>f.id!==feeId);
    doc.fee = doc.fees[0].amount;
    saveState(); root.innerHTML=''; renderAdmin(); toast('Fee deleted');
  });
}
function slipHtml(doc, entry){
  const lines = (entry.prescription||'').split('\n').filter(Boolean);
  const slipNo = (entry.id||'').slice(0,6).toUpperCase();
  return `
    <div class="slip-paper" id="slip-content">
      <div class="slip-band">
        ${doc.logoDataUrl ? `<img class="slip-logo" src="${doc.logoDataUrl}">` : ''}
        <div>
          <div class="slip-clinic">${doc.name}</div>
          <div class="slip-docline">${doc.spec}${doc.clinicName && doc.clinicName!==doc.name ? ' · '+doc.clinicName : ''}</div>
          ${[doc.clinicAddress, doc.clinicPhone, doc.clinicEmail].filter(Boolean).length ? `<div class="slip-contactline">${[doc.clinicAddress, doc.clinicPhone, doc.clinicEmail].filter(Boolean).join('  ·  ')}</div>` : ''}
        </div>
      </div>
      <div class="slip-body">
        ${doc.logoDataUrl ? `<img class="slip-watermark-img" src="${doc.logoDataUrl}">` : ''}
        <div style="position:relative; z-index:1;">
        <div class="slip-infobox">
          <div><b>Patient</b><br>${entry.patientName}${entry.patientAge?', '+entry.patientAge+' yrs':''}${entry.patientGender?', '+entry.patientGender:''}<br>${entry.patientPhone}</div>
          <div style="text-align:right;"><b>Slip No.</b><br>#${slipNo}<br><b>Date:</b> ${niceDate(entry.date)}</div>
        </div>
        ${entry.vitals ? `<div class="slip-label">Vitals</div><div class="slip-val">${entry.vitals}</div>` : ''}
        <div class="slip-label">Diagnosis</div>
        <div class="slip-val">${entry.diagnosis || '—'}</div>
        ${lines.length ? `<div class="slip-label">Rx &nbsp;·&nbsp; Prescription</div><div class="slip-val">${lines.map((l,i)=>`<div class="slip-rx-item"><span class="slip-rx-num">${i+1}.</span>${l}</div>`).join('')}</div>` : ''}
        ${entry.advice ? `<div class="slip-label">Advice</div><div class="slip-val">${entry.advice}</div>` : ''}
        ${entry.notes ? `<div class="slip-label">Notes</div><div class="slip-val">${entry.notes}</div>` : ''}
        <div class="slip-foot">
          <div class="slip-watermark">Generated via AppointoDoc</div>
          <div class="sig"><div class="ln">${doc.name}</div><div class="spec">${doc.spec}</div></div>
        </div>
        </div>
      </div>
    </div>
  `;
}
function buildSlipPdf(doc, entry){
  if(!window.jspdf){ return null; }
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({unit:'pt', format:'a5'});
  const pageW = 420, left = 40, right = pageW-40;
  let y;
  let textLeft = left;

  pdf.setFillColor(14,79,73);
  pdf.rect(0, 0, pageW, 88, 'F');

  if(doc.logoDataUrl){
    try{
      const fmt = doc.logoDataUrl.indexOf('image/png')>-1 ? 'PNG' : 'JPEG';
      pdf.addImage(doc.logoDataUrl, fmt, left, 20, 46, 46, undefined, 'FAST');
      textLeft = left + 58;
    }catch(e){ /* unsupported image format — skip logo, rest of slip still generates */ }
  }

  pdf.setTextColor(255,255,255);
  pdf.setFont('times','bold'); pdf.setFontSize(18);
  pdf.text(doc.name, textLeft, 34);
  pdf.setFont('helvetica','normal'); pdf.setFontSize(10);
  pdf.setTextColor(191,224,218);
  pdf.text(`${doc.spec}${doc.clinicName && doc.clinicName!==doc.name ? '  ·  '+doc.clinicName : ''}`, textLeft, 52);
  const contact = [doc.clinicAddress, doc.clinicPhone, doc.clinicEmail].filter(Boolean).join('   ·   ');
  if(contact){
    pdf.setFontSize(8.5); pdf.setTextColor(159,201,194);
    const contactWrapped = pdf.splitTextToSize(contact, pageW-textLeft-40);
    pdf.text(contactWrapped, textLeft, 68);
  }

  if(doc.logoDataUrl){
    try{
      const fmt = doc.logoDataUrl.indexOf('image/png')>-1 ? 'PNG' : 'JPEG';
      const wSize = 200;
      pdf.saveGraphicsState();
      pdf.setGState(new pdf.GState({opacity:0.06}));
      pdf.addImage(doc.logoDataUrl, fmt, (pageW-wSize)/2, 160, wSize, wSize, undefined, 'FAST');
      pdf.restoreGraphicsState();
    }catch(e){ /* watermark not supported in this jsPDF build — skip silently */ }
  }
  y = 112;

  pdf.setDrawColor(225,233,230); pdf.setFillColor(244,248,247);
  pdf.roundedRect(left, y, right-left, 54, 6, 6, 'FD');
  pdf.setTextColor(20,36,32); pdf.setFont('helvetica','bold'); pdf.setFontSize(9);
  pdf.text('PATIENT', left+14, y+18);
  pdf.setFont('helvetica','normal'); pdf.setFontSize(10.5);
  pdf.text(`${entry.patientName}${entry.patientAge?', '+entry.patientAge+' yrs':''}${entry.patientGender?', '+entry.patientGender:''}`, left+14, y+33);
  pdf.setFontSize(9); pdf.setTextColor(90,110,105);
  pdf.text(entry.patientPhone||'-', left+14, y+46);

  pdf.setFont('helvetica','bold'); pdf.setFontSize(9); pdf.setTextColor(20,36,32);
  pdf.text('DATE', right-110, y+18);
  pdf.setFont('helvetica','normal'); pdf.setFontSize(10.5);
  pdf.text(niceDate(entry.date), right-110, y+33);
  y += 54 + 20;

  function sectionLabel(text){
    pdf.setFont('helvetica','bold'); pdf.setFontSize(9.5); pdf.setTextColor(14,79,73);
    pdf.text(text.toUpperCase(), left, y);
    pdf.setDrawColor(225,233,230); pdf.setLineWidth(0.7);
    const tw = pdf.getTextWidth(text.toUpperCase());
    pdf.line(left+tw+8, y-3, right, y-3);
    y += 16;
    pdf.setTextColor(38,51,47); pdf.setFont('helvetica','normal'); pdf.setFontSize(10.5);
  }

  if(entry.vitals){
    sectionLabel('Vitals');
    const w = pdf.splitTextToSize(entry.vitals, right-left);
    pdf.text(w, left, y); y += 14*w.length + 10;
  }

  sectionLabel('Diagnosis');
  const diagLines = pdf.splitTextToSize(entry.diagnosis||'-', right-left);
  pdf.text(diagLines, left, y); y += 14*diagLines.length + 10;

  const rxLines = (entry.prescription||'').split('\n').filter(Boolean);
  if(rxLines.length){
    sectionLabel('Rx  ·  Prescription');
    rxLines.forEach((line,i)=>{
      const wrapped = pdf.splitTextToSize(line, right-left-22);
      pdf.setFont('helvetica','bold'); pdf.setTextColor(14,79,73);
      pdf.text((i+1)+'.', left, y);
      pdf.setFont('helvetica','normal'); pdf.setTextColor(38,51,47);
      pdf.text(wrapped, left+18, y);
      y += 14*wrapped.length + 4;
    });
    y += 6;
  }

  if(entry.advice){
    sectionLabel('Advice');
    const w = pdf.splitTextToSize(entry.advice, right-left);
    pdf.text(w, left, y); y += 14*w.length + 10;
  }
  if(entry.notes){
    sectionLabel('Notes');
    const w = pdf.splitTextToSize(entry.notes, right-left);
    pdf.text(w, left, y); y += 14*w.length + 10;
  }

  y = Math.max(y+30, 500);
  pdf.setFontSize(8); pdf.setTextColor(150,160,158);
  pdf.text('Generated via AppointoDoc', left, y+30);
  pdf.setDrawColor(140,140,140); pdf.setLineWidth(0.8);
  pdf.line(right-190, y, right, y);
  pdf.setFont('helvetica','bold'); pdf.setFontSize(10.5); pdf.setTextColor(20,36,32);
  pdf.text(doc.name, right, y+14, {align:'right'});
  pdf.setFont('helvetica','normal'); pdf.setFontSize(9); pdf.setTextColor(90,110,105);
  pdf.text(doc.spec, right, y+27, {align:'right'});
  return pdf;
}
function openSlipModal(doc, entry){
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop"><div class="modal wide">
      <button class="modal-close" id="close-m">${ICONS.x}</button>
      <h3>Prescription Slip</h3>
      <div class="sub">Download ya share karein</div>
      ${slipHtml(doc, entry)}
      <div class="modal-actions">
        <button class="btn btn-coral" style="flex:1;" id="slip-download">${ICONS.download} Download PDF</button>
        <button class="btn btn-outline" style="flex:1;" id="slip-share">${ICONS.share} Share</button>
      </div>
    </div></div>
  `;
  document.getElementById('close-m').addEventListener('click', ()=>{ root.innerHTML=''; });
  document.getElementById('slip-download').addEventListener('click', ()=>{
    const pdf = buildSlipPdf(doc, entry);
    if(!pdf){ toast('PDF library load nahi ho payi — internet check karein'); return; }
    pdf.save(`slip-${entry.patientName.replace(/\s+/g,'-')}-${entry.date}.pdf`);
    toast('Slip downloaded');
  });
  document.getElementById('slip-share').addEventListener('click', async ()=>{
    const summary = `Prescription Slip — ${doc.clinicName||doc.name}\nPatient: ${entry.patientName}\nDate: ${niceDate(entry.date)}\nDiagnosis: ${entry.diagnosis}\n${entry.prescription?'Rx: '+entry.prescription.replace(/\n/g,'; '):''}`;
    try{
      const pdf = buildSlipPdf(doc, entry);
      if(pdf && navigator.canShare){
        const blob = pdf.output('blob');
        const file = new File([blob], 'prescription-slip.pdf', {type:'application/pdf'});
        if(navigator.canShare({files:[file]})){
          await navigator.share({ files:[file], title:'Prescription Slip', text: summary });
          return;
        }
      }
      if(navigator.share){ await navigator.share({ title:'Prescription Slip', text: summary }); return; }
      copyText(summary, (ok)=>{ toast(ok ? 'Slip details copied' : 'Sharing supported nahi hai is browser me'); });
    }catch(e){ /* user cancelled share sheet */ }
  });
}

/* ================= ROOT RENDER ================= */
const THEME_ORDER = ['light','dark','red'];
const THEME_ICONS = {light:'☀️', dark:'🌙', red:'❤️'};
function applyTheme(theme){
  if(theme==='light') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', theme);
  try{ localStorage.setItem('aarogyaslot-theme', theme); }catch(e){ /* ignore */ }
  const fab = document.getElementById('theme-fab');
  if(fab) fab.textContent = THEME_ICONS[theme] || '☀️';
}
function cycleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = THEME_ORDER[(THEME_ORDER.indexOf(current)+1) % THEME_ORDER.length];
  applyTheme(next);
}
function initTheme(){
  let saved = 'light';
  try{ saved = localStorage.getItem('aarogyaslot-theme') || 'light'; }catch(e){ /* ignore */ }
  applyTheme(saved);
  const fab = document.getElementById('theme-fab');
  if(fab) fab.addEventListener('click', cycleTheme);
}


ICONS.qr = ICONS.qr || `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h1"/></svg>`;
ICONS.pin = ICONS.pin || `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`;

/* ================= CONFIG ================= */
/* Paste your Firebase web config here (Firebase console → Project settings → Your apps → Web app).
   While these values still say YOUR_..., the app runs in LOCAL DEMO MODE (data stays on this device, NOT secure). */
const APP_CONFIG = {
  firebase:{
    "apiKey": "AIzaSyA8d-fQZ6iy2OhHc-DTu5gf_dFxH61b7DM",
    "authDomain": "aarogyaslot.firebaseapp.com",
    "projectId": "aarogyaslot",
    "storageBucket": "aarogyaslot.firebasestorage.app",
    "messagingSenderId": "990395682309",
    "appId": "1:990395682309:web:a1be64be91a3b7dec4566c"
  },
  siteUrl:'',            // e.g. 'https://yourdomain.com' — used for booking links + QR codes. '' = current address.
  usePathRoutes:false,   // true when hosted with firebase.json rewrites → links look like https://yourdomain.com/book/dr-anil-sharma
  brand:'AarogyaSlot',
};
const FIREBASE_MODE = !/YOUR_/.test(APP_CONFIG.firebase.apiKey);
/* ---- PWA: makes "Install app" appear in Chrome (needs manifest.json, sw.js, icon-192.png, icon-512.png next to index.html) ---- */
(function(){ try{
  const h=document.head;
  if(!document.querySelector('link[rel="manifest"]')){ const l=document.createElement('link'); l.rel='manifest'; l.href='manifest.json'; h.appendChild(l); }
  if(!document.querySelector('meta[name="theme-color"]')){ const m=document.createElement('meta'); m.name='theme-color'; m.content='#0f4f47'; h.appendChild(m); }
  if(!document.querySelector('link[rel="apple-touch-icon"]')){ const a=document.createElement('link'); a.rel='apple-touch-icon'; a.href='icon-192.png'; h.appendChild(a); }
  if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}catch(e){} })();
/* Mobile OTP (via Firebase Phone Auth) aur WhatsApp confirmation-link abhi patient ko bheje nahi ja rahe.
   Isliye "My Appointment" page par un dono ka UI hide kar diya hai — code hata nahi, sirf chhupaya hai.
   Jab WhatsApp/SMS provider connect ho jaye, isko true kar dena — purana OTP flow turant wapas aa jayega. */
const OTP_MSG_ENABLED = false;
window.APP_CONFIG = APP_CONFIG; window.FIREBASE_MODE = FIREBASE_MODE;

const APPT_STATUS = {
  booked:{label:'Booked'}, confirmed:{label:'Confirmed'}, arrived:{label:'Arrived'}, in_consultation:{label:'In Consultation'},
  completed:{label:'Completed'}, cancelled:{label:'Cancelled'}, no_show:{label:'No Show'},
};
const OPEN_STATUSES = ['booked','confirmed','arrived','in_consultation'];
const WAITING_STATUSES = ['booked','confirmed','arrived'];
const ADMIN_NAV = [
  {id:'overview', label:'Dashboard', icon:'overview'},
  {id:'appointments', label:'Appointments', icon:'list'},
  {id:'patients', label:'Patients', icon:'users'},
  {id:'schedule', label:'Schedule', icon:'clock'},
  {id:'payments', label:'Payments', icon:'card'},
  {id:'finance', label:'Expenses', icon:'money'},
  {id:'analytics', label:'Reports', icon:'chart'},
  {id:'booking', label:'Booking Page', icon:'link'},
  {id:'settings', label:'Settings', icon:'shield'},
];
const SA_NAV = [
  {id:'dashboard', label:'Dashboard', icon:'overview'},
  {id:'doctors', label:'Doctors', icon:'users'},
  {id:'subscriptions', label:'Subscriptions', icon:'card'},
  {id:'payments', label:'Payments', icon:'money'},
  {id:'appointments', label:'Appointments', icon:'calendar'},
  {id:'patients', label:'Patients', icon:'list'},
  {id:'reports', label:'Reports', icon:'chart'},
  {id:'website', label:'Website', icon:'share'},
  {id:'settings', label:'Settings', icon:'shield'},
];
const EXPENSE_CATEGORIES = ['Rent','Staff Salary','Electricity','Medicine','Equipment','Marketing','Internet','Other'];
const DEFAULT_PLANS = [
  {id:'basic', name:'Basic', price:499, cycle:'monthly', features:'Online booking page, QR poster'},
  {id:'professional', name:'Professional', price:999, cycle:'monthly', features:'Everything in Basic + reports, waitlist'},
  {id:'premium', name:'Premium', price:1999, cycle:'monthly', features:'Everything in Professional + priority support'},
];
const CYCLE_DAYS = {monthly:30, quarterly:91, yearly:365};
function defaultPayMethods(){ return { upi:{enabled:true, upiId:''}, card:{enabled:false}, netbanking:{enabled:false}, cash:{enabled:true} }; }
function defaultWorkingHours(){ return { slotMinutes:20, ranges:[{start:'09:00', end:'13:00'}, {start:'16:00', end:'20:00'}] }; }
function defaultSettings(){ return { advanceDays:14, sameDay:true, allowCancel:true, allowReschedule:true, waitlist:true, docUpload:true, symptoms:true, bookingEnabled:true, cutoffMinutes:0 }; }
function defaultSchedule(){
  const days={}; for(let i=0;i<7;i++) days[i]={enabled:i>=1&&i<=5, ranges:[{start:'09:00',end:'13:00'},{start:'16:00',end:'20:00'}]};
  return { slotMinutes:20, maxPerDay:0, maxPerSlot:1, days, blocks:[], tokenWise:false };
}

/* ================= HELPERS (pure) ================= */
function pad(n){ return n<10?'0'+n:''+n; }
function fmtDate(d){ return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function todayStr(){ return fmtDate(new Date()); }
function addDays(dstr, n){ const d=new Date(dstr+'T00:00:00'); d.setDate(d.getDate()+n); return fmtDate(d); }
function niceDate(dstr){ if(!dstr) return '—'; return new Date(dstr.length>10?dstr:dstr+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); }
function dow(dstr){ return new Date(dstr+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short'}); }
function toMin(t){ const p=String(t).split(':').map(Number); return p[0]*60+(p[1]||0); }
function fromMin(m){ return pad(Math.floor(m/60))+':'+pad(m%60); }
function fmt12(t){ if(!t) return ''; const [h,m]=t.split(':').map(Number); return ((h%12)||12)+':'+pad(m)+' '+(h>=12?'PM':'AM'); }
function tokenLabel(n){ if(!Number.isInteger(n)) return 'EMG'; return '#'+(n<100 ? pad(n) : n); }
/* token-wise doctors: token number = the slot number the patient picked (same numbering as the slot grid) */
function slotTokenNo(doc,date,time){ try{ if(!doc||!docSchedule(doc).tokenWise) return null; const i=baseSlots(doc,date).indexOf(time); return i>=0?i+1:null; }catch(e){ return null; } }
function cryptoRand(n){ const a=new Uint32Array(n); (window.crypto||window.msCrypto).getRandomValues(a); return a; }
function uid(){ const a=cryptoRand(3); return a[0].toString(36)+a[1].toString(36).slice(0,4)+a[2].toString(36).slice(0,3); }
function genPassword(){ const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'; const r=cryptoRand(12); let p=''; for(let i=0;i<12;i++) p+=chars[r[i]%chars.length]; return p; }
function slugify(name){ return String(name||'').toLowerCase().replace(/^dr\.?\s*/,'').trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')||uid(); }
function genLoginId(name, mobile){ const base=slugify(name).replace(/-/g,'_'); const digits=(mobile||'').replace(/\D/g,''); return base+'_'+(digits?digits.slice(-4):String(1000+cryptoRand(1)[0]%9000)); }
function initials(name){ return String(name||'?').replace('Dr. ','').split(' ').map(w=>w[0]).slice(0,2).join(''); }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function unesc(s){ return String(s).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&'); }
const NO_ESC_KEYS = {id:1,doctorId:1,dataUrl:1,url:1,logoDataUrl:1,photoDataUrl:1,slug:1,mimeType:1,storagePath:1,apptId:1,slotKey:1,date:1,time:1,createdAt:1,uploadedAt:1,status:1,paymentStatus:1,method:1,type:1,source:1};
function mapStrings(v, fn, key){
  if(typeof v==='string') return (key&&NO_ESC_KEYS[key]) ? v : fn(v);
  if(Array.isArray(v)) return v.map(x=>mapStrings(x,fn,key));
  if(v && typeof v==='object'){ const o={}; Object.keys(v).forEach(k=>{ o[k]=mapStrings(v[k],fn,k); }); return o; }
  return v;
}
/* State holds HTML-safe strings for anything that came from outside (patients, DB). DB always stores raw text. */
function escDeep(v){ return mapStrings(v, esc); }
function unescDeep(v){ return mapStrings(v, unesc); }
function digitsOnly(s){ return String(s||'').replace(/\D/g,''); }
function normPhone(s){ let d=digitsOnly(s); if(d.length===12&&d.startsWith('91')) d=d.slice(2); if(d.length===11&&d.startsWith('0')) d=d.slice(1); return d; }
function validPhone(s){ return /^[6-9][0-9]{9}$/.test(normPhone(s)); }
function e164(s){ return '+91'+normPhone(s); }
function apptCode(id){ return 'AD-'+String(id||'').replace(/[^A-Za-z0-9]/g,'').slice(0,6).toUpperCase(); }
function migrateStatus(s){ return s==='upcoming'?'booked': s==='missed'?'no_show': s; }
function isOpenStatus(s){ return OPEN_STATUSES.includes(migrateStatus(s)); }
function statusLabel(s){ s=migrateStatus(s); return (APPT_STATUS[s]||{label:s}).label; }
function statusBadge(s){ s=migrateStatus(s); return `<span class="status-badge st-${s}">${statusLabel(s)}</span>`; }

/* ---- schedule ---- */
function docSchedule(doc){
  if(doc.schedule && doc.schedule.days) return doc.schedule;
  const wh = doc.workingHours || defaultWorkingHours(), days={}, on=doc.days||[1,2,3,4,5];
  for(let i=0;i<7;i++) days[i]={enabled:on.includes(i), ranges:(wh.ranges||[]).map(r=>({start:r.start,end:r.end}))};
  return { slotMinutes:wh.slotMinutes||20, maxPerDay:0, maxPerSlot:1, days, blocks:[] };
}
function blockCovers(b, date, time){
  if(b.kind==='date') return b.date===date;
  if(b.kind==='range') return date>=b.from && date<=b.to;
  if(b.kind==='time') return b.date===date && time!=null && toMin(time)>=toMin(b.start) && toMin(time)<toMin(b.end);
  if(b.kind==='daily') return time!=null && toMin(time)>=toMin(b.start) && toMin(time)<toMin(b.end);
  return false;
}
function dayBlock(doc, date){ return (docSchedule(doc).blocks||[]).find(b=>(b.kind==='date'||b.kind==='range') && blockCovers(b,date,null)); }
function baseSlots(doc, date){
  const sch=docSchedule(doc), cfg=sch.days[new Date(date+'T00:00:00').getDay()];
  if(!cfg||!cfg.enabled) return [];
  if(dayBlock(doc,date)) return [];
  const step=Math.max(5,Number(sch.slotMinutes)||20), out=[];
  (cfg.ranges||[]).forEach(r=>{ if(!r.start||!r.end) return; let m=toMin(r.start); const end=toMin(r.end); while(m+step<=end){ out.push(fromMin(m)); m+=step; } });
  const filtered=out.filter(t=>!(sch.blocks||[]).some(b=>blockCovers(b,date,t))).sort();
  const extra=(sch.extras||{})[date]||0;
  if(extra>0 && filtered.length){ let m=toMin(filtered[filtered.length-1])+step; for(let i=0;i<extra;i++){ filtered.push(fromMin(m)); m+=step; } }
  return filtered;
}
/* usage = {time: count}; nowDate injectable for tests */
function computeAvailability(doc, date, usage, opts){
  opts=opts||{}; const now=opts.now||new Date(), today=fmtDate(now), sch=docSchedule(doc), st=Object.assign(defaultSettings(),doc.settings||{});
  const res={date, slots:[], closed:false, reason:null, full:false};
  if(date<today){ res.closed=true; res.reason='past'; return res; }
  if(date===today && st.sameDay===false){ res.closed=true; res.reason='same_day_off'; return res; }
  if(date>addDays(today, Number(st.advanceDays)||14)){ res.closed=true; res.reason='too_far'; return res; }
  const blk=dayBlock(doc,date); if(blk){ res.closed=true; res.reason='blocked'; res.label=blk.label||'Doctor unavailable'; return res; }
  const times=baseSlots(doc,date); if(!times.length){ res.closed=true; res.reason='not_working'; return res; }
  const cap=Math.max(1,Number(sch.maxPerSlot)||1); usage=usage||{};
  const dayTotal=Object.values(usage).reduce((s,n)=>s+(n&&typeof n==='object'?n.count:(n||0)),0), dayFull=sch.maxPerDay>0 && dayTotal>=sch.maxPerDay;
  const nowMin=now.getHours()*60+now.getMinutes()+(Number(st.cutoffMinutes)||0);
  res.slots=times.map((t,i)=>{ const past=(date===today && toMin(t)<=nowMin); const u=usage[t], used=u&&typeof u==='object'?u.count:(u||0), completedN=u&&typeof u==='object'?u.completed:0; return { time:t, tokenIdx:i+1, used, capacity:cap, past, free:!past && !dayFull && used<cap, completed:used>0&&completedN>=used }; });
  res.full = res.slots.length>0 && res.slots.every(s=>!s.free) ;
  res.dayFull = dayFull;
  return res;
}
function bookingClosedReason(doc, platformPublic){
  if(!doc) return 'not_found';
  if(doc.deleted) return 'not_found';
  if(doc.active===false) return 'inactive';
  if((doc.settings||{}).bookingEnabled===false) return 'paused';
  const exp = (doc.subscription&&doc.subscription.expiry) || doc.subExpiry;
  if(platformPublic && platformPublic.blockBookingOnExpiry && exp && exp < todayStr()) return 'expired';
  return null;
}
/* ---- subscriptions ---- */
function subInfo(d, settings){
  const s=d.subscription||{}, exp=s.expiry||d.subExpiry||null, warn=Number((settings||{}).expiryWarnDays)||7;
  const days = exp ? Math.round((new Date(exp+'T00:00:00')-new Date(todayStr()+'T00:00:00'))/86400000) : null;
  let bucket = !exp ? (s.status==='paid'?'active':'unpaid') : days<0 ? 'expired' : days<=warn ? 'expiring' : 'active';
  const label = exp ? (days<0 ? 'Expired '+(-days)+' day'+(-days===1?'':'s')+' ago' : days===0 ? 'Subscription expires today' : 'Subscription expires in '+days+' day'+(days===1?'':'s')) : (s.status==='paid'?'No expiry set':'No active subscription');
  return { plan:s.planName||'—', amount:s.amount||0, status:s.status||'unpaid', expiry:exp, start:s.start||null, days, bucket, label };
}
/* ---- ICS / links ---- */
function icsFor(doc, a){
  const dt=(d,t)=>d.replace(/-/g,'')+'T'+t.replace(':','')+'00';
  const step=(docSchedule(doc).slotMinutes||20), end=fromMin(toMin(a.time)+step);
  return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//AppointoDoc//EN','BEGIN:VEVENT','UID:'+a.id+'@appointodoc','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z',
    'DTSTART:'+dt(a.date,a.time),'DTEND:'+dt(a.date,end),'SUMMARY:Appointment with '+unesc(doc.name),'LOCATION:'+unesc([doc.clinicName,doc.clinicAddress].filter(Boolean).join(', ')),
    'DESCRIPTION:Token '+tokenLabel(a.tokenNo)+' · ID '+apptCode(a.id),'END:VEVENT','END:VCALENDAR'].join('\r\n');
}
function waLink(phone, text){ return 'https://wa.me/'+(digitsOnly(phone).length===10?'91':'')+digitsOnly(phone)+'?text='+encodeURIComponent(text); }

/* ================= FIREBASE SDK LOADER (only in live mode) ================= */
window.__fbReady=(async()=>{
  if(!FIREBASE_MODE) return null;
  const B='https://www.gstatic.com/firebasejs/10.12.2/';
  const [A,Au,F,St]=await Promise.all([import(B+'firebase-app.js'),import(B+'firebase-auth.js'),import(B+'firebase-firestore.js'),import(B+'firebase-storage.js')]);
  const app=A.initializeApp(APP_CONFIG.firebase), auth=Au.getAuth(app);
  const S=Object.assign({},A,Au,F,{storageRef:St.ref,uploadBytes:St.uploadBytes,getDownloadURL:St.getDownloadURL});
  return { app, auth, db:F.getFirestore(app), storage:St.getStorage(app), S };
})().catch(e=>{ console.error('Firebase SDK failed to load',e); return null; });

/* ================= STATE / SESSION ================= */
let state = {
  doctors:[], appointments:[], histories:[], payments:[], ledger:[], documents:[], reviews:[], familyMembers:[], waitlist:[], patients:[],
  platform:{ settings:{ plans:DEFAULT_PLANS.map(p=>({...p})), autoDeactivateOnExpiry:false, expiryWarnDays:7 }, public:{ blockBookingOnExpiry:false } },
};
let ui = {
  route:{ type:'directory', doctorId:null, slug:null },
  adminTab:'overview', saTab:'dashboard', previewMode:false, lang:'hi',
  selectedPatientPhone:null, booking:{ date:null, time:null }, patientForm:{ name:'', phone:'', age:'', gender:'', reason:'', forOther:false, relation:'Self', otherName:'', pendingDocs:[] },
  lookupPhone:'', modal:null, viewAsDoctorId:null, scheduleDate:null, apptFilter:{ range:'today', status:'', q:'', date:'' }, saFilter:{ q:'', chip:'all' },
};
let session = { role:null, uid:null, doctorId:null, email:null, phone:null, mustChange:false, blocked:null };
const AVATAR_COLORS = ['#0E4F49','#2E6E82','#FF6B54','#3FA796','#E8A33D','#0A3733','#9C5FBF','#3B6BB0'];
function docById(id){ return state.doctors.find(d=>d.id===id); }
function docBySlug(slug){ return state.doctors.find(d=>d.slug===slug); }
function curDoctorId(){ return session.role==='doctor' ? session.doctorId : (session.role==='superadmin' ? ui.viewAsDoctorId : null); }
function serialOf(d){ const list=[...state.doctors].filter(x=>!x.deleted).sort((a,b)=>(a.createdAt||'').localeCompare(b.createdAt||'')||a.id.localeCompare(b.id)); return pad3(list.findIndex(x=>x.id===d.id)+1); }
function pad3(n){ return String(n).padStart(3,'0'); }

function normalizeDoctor(d){
  d.active = d.active!==false; d.color = d.color||AVATAR_COLORS[Math.abs((d.id||'').length+((d.name||'').length))%AVATAR_COLORS.length];
  d.settings = Object.assign(defaultSettings(), d.settings||{});
  d.schedule = docSchedule(d);
  d.payMethods = d.payMethods || defaultPayMethods();
  if(!d.fees || !d.fees.length) d.fees=[{id:uid(), label:'Consultation', amount:Number(d.fee)||0}];
  d.bio = d.bio||''; d.fee = Number(d.fee)||0; d.exp = d.exp==null?'':d.exp;
  delete d.password;
  return d;
}
function normalizeItem(coll, x){
  if(coll==='appointments'){ x.status=migrateStatus(x.status); if(x.paymentStatus==null) x.paymentStatus='pending'; }
  if(coll==='payments'){ if(x.status==='paid') x.status='success'; }
  return x;
}

/* ================= PERSISTENCE (diff-sync so legacy code can keep calling saveState()) ================= */
const DOC_COLLS = ['appointments','histories','payments','ledger','documents','reviews','waitlist','patients'];
let baseline = { doctors:{}, coll:{}, family:{} }; DOC_COLLS.forEach(c=>baseline.coll[c]={});
const jsonOf = x=>JSON.stringify(x);
function resetBaseline(){
  baseline={ doctors:{}, coll:{}, family:{} }; DOC_COLLS.forEach(c=>baseline.coll[c]={});
  state.doctors.forEach(d=>{ baseline.doctors[d.id]=jsonOf(d); });
  DOC_COLLS.forEach(c=>state[c].forEach(x=>{ baseline.coll[c][x.id]={json:jsonOf(x), doctorId:x.doctorId}; }));
  state.familyMembers.forEach(x=>{ baseline.family[x.id]=jsonOf(x); });
}
function collectOps(){
  const ops=[], role=session.role;
  if(role==='doctor'||role==='superadmin'){
    state.doctors.forEach(d=>{ if(role==='doctor'&&d.id!==session.doctorId) return; const j=jsonOf(d); if(baseline.doctors[d.id]!==j) ops.push({op:'set',kind:'doctor',id:d.id,data:d,json:j}); });
    DOC_COLLS.forEach(c=>{
      const seen={};
      state[c].forEach(x=>{ if(role==='doctor'&&x.doctorId!==session.doctorId) return; seen[x.id]=1; const j=jsonOf(x), b=baseline.coll[c][x.id]; if(!b||b.json!==j) ops.push({op:'set',kind:'coll',coll:c,id:x.id,doctorId:x.doctorId,data:x,json:j}); });
      Object.keys(baseline.coll[c]).forEach(id=>{ if(!seen[id]){ const b=baseline.coll[c][id]; if(role==='doctor'&&b.doctorId!==session.doctorId) return; ops.push({op:'del',kind:'coll',coll:c,id,doctorId:b.doctorId}); } });
    });
  }
  if(role==='patient'){
    ['documents','reviews'].forEach(c=>{
      const seen={};
      state[c].forEach(x=>{ if(x.patientPhoneE164!==e164(session.phone)) return; seen[x.id]=1; const j=jsonOf(x), b=baseline.coll[c][x.id]; if(!b||b.json!==j) ops.push({op:'set',kind:'coll',coll:c,id:x.id,doctorId:x.doctorId,data:x,json:j}); });
      Object.keys(baseline.coll[c]).forEach(id=>{ if(!seen[id]){ ops.push({op:'del',kind:'coll',coll:c,id,doctorId:baseline.coll[c][id].doctorId}); } });
    });
    const seenF={}; state.familyMembers.forEach(x=>{ seenF[x.id]=1; const j=jsonOf(x); if(baseline.family[x.id]!==j) ops.push({op:'set',kind:'family',id:x.id,data:x,json:j}); });
    Object.keys(baseline.family).forEach(id=>{ if(!seenF[id]) ops.push({op:'del',kind:'family',id}); });
  }
  return ops;
}
function applyBaseline(ops){
  ops.forEach(o=>{
    if(o.kind==='doctor'){ baseline.doctors[o.id]=o.json; }
    else if(o.kind==='family'){ if(o.op==='set') baseline.family[o.id]=o.json; else delete baseline.family[o.id]; }
    else if(o.op==='set') baseline.coll[o.coll][o.id]={json:o.json,doctorId:o.doctorId}; else delete baseline.coll[o.coll][o.id];
  });
}
let flushChain = Promise.resolve();
let flushErr=null;
function saveNow(){
  if(!FIREBASE_MODE) return DemoBackend.persist();
  const ops=collectOps(); if(!ops.length) return flushChain;
  applyBaseline(ops);                       // optimistic — rolled back on failure
  const p=flushChain.catch(()=>{}).then(()=>Backend.flush(ops)).catch(e=>{
    ops.forEach(o=>{ if(o.kind==='doctor') delete baseline.doctors[o.id]; else if(o.kind==='family') delete baseline.family[o.id]; else delete baseline.coll[o.coll][o.id]; });
    throw e;
  });
  flushChain=p.catch(()=>{}); return p;
}
function saveState(){ return saveNow().catch(e=>{ console.error('Save failed', e); toast('Save nahi ho paya — '+errMsg(e)); }); }
let rerenderDirty=false;
function scheduleRerender(){ rerenderDirty=true; }
setInterval(()=>{
  if(!rerenderDirty) return;
  const modalOpen=(document.getElementById('modal-root')||{}).innerHTML.trim();
  const ae=document.activeElement, typing=ae&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName);
  if(modalOpen||typing) return;
  rerenderDirty=false; renderRoot();
}, 2500);

/* ================= DEMO BACKEND (local only — NOT secure; used until Firebase config is pasted) ================= */
const DEMO_KEY='appointodoc-demo-v2', DEMO_ACC='appointodoc-demo-accounts-v2', DEMO_SESS='appointodoc-demo-session-v2';
const DemoBackend = {
  mode:'demo',
  async init(){
    try{ const raw=localStorage.getItem(DEMO_KEY); if(raw){ const p=JSON.parse(raw); Object.keys(state).forEach(k=>{ if(p[k]!==undefined) state[k]=p[k]; }); } }catch(e){}
    state.doctors.forEach(normalizeDoctor); state.appointments.forEach(a=>normalizeItem('appointments',a)); state.payments.forEach(p=>normalizeItem('payments',p));
    state.platform=Object.assign({settings:{},public:{}},state.platform); state.platform.settings=Object.assign({plans:DEFAULT_PLANS.map(p=>({...p})),autoDeactivateOnExpiry:false,expiryWarnDays:7},state.platform.settings);
    try{ const s=JSON.parse(sessionStorage.getItem(DEMO_SESS)||'null'); if(s) session=Object.assign(session,s); }catch(e){}
    if(session.role==='doctor'){ const d=docById(session.doctorId); if(!d||d.active===false||d.deleted){ session={role:null,uid:null,doctorId:null,email:null,phone:null,mustChange:false,blocked:d&&d.active===false?'inactive':null}; } }
  },
  persist(){ try{ localStorage.setItem(DEMO_KEY, JSON.stringify(state)); }catch(e){ console.error('demo persist failed',e); toast('Storage full — kuch data save nahi hua'); } return Promise.resolve(); },
  accounts(){ try{ return JSON.parse(localStorage.getItem(DEMO_ACC)||'[]'); }catch(e){ return []; } },
  saveAccounts(a){ localStorage.setItem(DEMO_ACC, JSON.stringify(a)); },
  async hash(pw,salt){
    const data=new TextEncoder().encode(salt+':'+pw);
    if(window.crypto&&crypto.subtle){ const h=await crypto.subtle.digest('SHA-256',data); return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join(''); }
    let h1=0x811c9dc5; data.forEach(b=>{ h1^=b; h1=Math.imul(h1,16777619); }); return 'f'+(h1>>>0).toString(16);
  },
  hasSuperadmin(){ return this.accounts().some(a=>a.role==='superadmin'); },
  async setupSuperadmin(email,pw){ if(this.hasSuperadmin()) throw new Error('SuperAdmin already exists'); const salt=uid(); const acc=this.accounts(); acc.push({role:'superadmin',email:email.toLowerCase(),salt,hash:await this.hash(pw,salt)}); this.saveAccounts(acc); return this.signInStaff(email,pw); },
  async signInStaff(idOrEmail,pw){
    const key=String(idOrEmail||'').trim().toLowerCase(); const acc=this.accounts().find(a=>a.email===key||(a.loginId&&a.loginId.toLowerCase()===key));
    const bad=()=>{ const e=new Error('Login ID ya Password galat hai'); e.code='auth/invalid-credential'; return e; };
    if(!acc) throw bad(); if(await this.hash(pw,acc.salt)!==acc.hash) throw bad();
    if(acc.role==='doctor'){ const d=docById(acc.doctorId); if(!d||d.deleted) throw bad(); if(d.active===false){ const e=new Error('Account deactivated'); e.code='app/inactive'; throw e; } }
    session={role:acc.role,uid:acc.doctorId||('sa_'+acc.email),doctorId:acc.doctorId||null,email:acc.email,phone:null,mustChange:!!acc.mustChange,blocked:null};
    sessionStorage.setItem(DEMO_SESS, JSON.stringify(session)); return session;
  },
  async signOut(){ sessionStorage.removeItem(DEMO_SESS); session={role:null,uid:null,doctorId:null,email:null,phone:null,mustChange:false,blocked:null}; },
  async sendReset(email){ const e=new Error('Demo mode: email bhej nahi sakte. SuperAdmin "Reset Password" se naya temporary password bana sakta hai.'); e.code='app/demo'; throw e; },
  async changePassword(cur,next){
    const acc=this.accounts(); const a=acc.find(x=>x.email===session.email); if(!a) throw new Error('Account nahi mila');
    if(cur!==null && await this.hash(cur,a.salt)!==a.hash){ const e=new Error('Current password galat hai'); e.code='auth/wrong-password'; throw e; }
    a.salt=uid(); a.hash=await this.hash(next,a.salt); a.mustChange=false; this.saveAccounts(acc); session.mustChange=false; sessionStorage.setItem(DEMO_SESS, JSON.stringify(session));
  },
  async createDoctorAccount(email, loginId, doctorId){
    const acc=this.accounts(); if(acc.some(a=>a.email===email.toLowerCase()||a.loginId===loginId)){ const e=new Error('Ye email/Login ID pehle se hai'); e.code='auth/email-already-in-use'; throw e; }
    const temp=genPassword(), salt=uid(); acc.push({role:'doctor',doctorId,email:email.toLowerCase(),loginId,salt,hash:await this.hash(temp,salt),mustChange:true}); this.saveAccounts(acc);
    return { uid:doctorId, tempPassword:temp };
  },
  async resetDoctorPassword(d){ const acc=this.accounts(); const a=acc.find(x=>x.doctorId===d.id); if(!a) throw new Error('Account nahi mila'); const temp=genPassword(); a.salt=uid(); a.hash=await this.hash(temp,a.salt); a.mustChange=true; this.saveAccounts(acc); return temp; },
  _otp:null,
  async phoneStart(phone){ const code=String(100000+cryptoRand(1)[0]%900000); this._otp={phone:normPhone(phone),code,exp:Date.now()+300000}; return {demoCode:code}; },
  async phoneVerify(code){ const o=this._otp; if(!o||Date.now()>o.exp||String(code).trim()!==o.code){ const e=new Error('OTP galat hai ya expire ho gaya'); e.code='auth/invalid-verification-code'; throw e; } session={role:'patient',uid:'p_'+o.phone,doctorId:null,email:null,phone:o.phone,mustChange:false,blocked:null}; sessionStorage.setItem(DEMO_SESS, JSON.stringify(session)); this._otp=null; return session; },
  async loadDirectory(){}, async loadDoctorPublic(slug){ const d=docBySlug(slug); return d&&!d.deleted?d:null; }, async loadScope(){}, async loadPlatform(){},
  async loadPublicReviews(){}, async loadPatientData(){}, async loadDoctorDetail(){},
  _syncAppts(){ try{ const raw=localStorage.getItem(DEMO_KEY); if(!raw) return; const p=JSON.parse(raw); (p.appointments||[]).forEach(x=>{ const cur=state.appointments.find(a=>a.id===x.id); if(cur) Object.assign(cur,x); else state.appointments.push(x); }); }catch(e){} },
  _usage(doctorId,date){ const u={}; state.appointments.forEach(a=>{ if(a.doctorId===doctorId&&a.date===date&&a.status!=='cancelled'){ if(!u[a.time]) u[a.time]={count:0,completed:0}; u[a.time].count++; if(a.status==='completed') u[a.time].completed++; } }); return u; },
  async setCurrentToken(doctorId,date,tokenNo){ try{ const raw=localStorage.getItem(DEMO_KEY), p=raw?JSON.parse(raw):{}; p.currentTokens=p.currentTokens||{}; p.currentTokens[doctorId+'_'+date]=tokenNo||null; localStorage.setItem(DEMO_KEY,JSON.stringify(p)); }catch(e){} },
  async getCurrentToken(doctorId,date){ try{ const raw=localStorage.getItem(DEMO_KEY); if(!raw) return null; const p=JSON.parse(raw); return (p.currentTokens&&p.currentTokens[doctorId+'_'+date])||null; }catch(e){ return null; } },
  async markSlotCompleted(){},
  async getSlotUsage(doctorId,date){ this._syncAppts(); return this._usage(doctorId,date); },
  async bookAppointment(input){
    const doc=docById(input.doctorId); if(!doc) throw appErr('not_found','Doctor nahi mila');
    if(!input.staff){ const r=bookingClosedReason(doc,state.platform.public); if(r) throw appErr('closed','Booking abhi available nahi hai'); }
    this._syncAppts(); const usage=this._usage(doc.id,input.date), sch=docSchedule(doc), cap=Math.max(1,Number(sch.maxPerSlot)||1);
    if(!input.staff){ const av=computeAvailability(doc,input.date,usage); const s=av.slots.find(x=>x.time===input.time); if(!s||!s.free) throw appErr('slot_taken','Ye slot abhi-abhi kisi aur ne book kar liya — kripya dusra slot chunein'); }
    else if((usage[input.time]?usage[input.time].count:0)>=cap) throw appErr('slot_taken','Ye slot pehle se book hai');
    const dayActive=Object.values(usage).reduce((s,n)=>s+(n.count||0),0); if(!input.staff && sch.maxPerDay>0 && dayActive>=sch.maxPerDay) throw appErr('day_full','Is din ki saari appointments full hain');
    const tokens=state.appointments.filter(a=>a.doctorId===doc.id&&a.date===input.date&&a.tokenNo<100).map(a=>a.tokenNo);
    const p=input.patient;
    const appt=escDeep({ id:uid()+uid(), doctorId:doc.id, source:input.source||'patient', status:'booked', date:input.date, time:input.time, tokenNo:slotTokenNo(doc,input.date,input.time)||Math.max(0,...tokens)+1, fee:input.fee!=null?input.fee:doc.fee,
      paymentStatus:'pending', patientName:p.name, patientPhone:normPhone(p.phone), patientPhoneE164:e164(p.phone), patientAge:p.age||'', patientGender:p.gender||'', reason:p.reason||'', bookedFor:p.bookedFor||null, createdAt:new Date().toISOString(), notifyDoctor:input.source!=='manual' });
    state.appointments.push(appt); await this.persist(); return appt;
  },
  async cancelAppointment(doctorId,apptId,by){ this._syncAppts(); const a=state.appointments.find(x=>x.id===apptId&&x.doctorId===doctorId); if(!a) throw appErr('not_found','Appointment nahi mili'); if(!isOpenStatus(a.status)) throw appErr('bad_state','Ye appointment ab cancel nahi ho sakti'); a.status='cancelled'; a.cancelledBy=by||'patient'; a.cancelledAt=new Date().toISOString(); a.notifyDoctor=by==='patient'; await this.persist(); return a; },
  async rescheduleAppointment(doctorId,apptId,date,time,by){
    this._syncAppts(); const a=state.appointments.find(x=>x.id===apptId&&x.doctorId===doctorId); if(!a) throw appErr('not_found','Appointment nahi mili'); if(!isOpenStatus(a.status)) throw appErr('bad_state','Ye appointment reschedule nahi ho sakti');
    const doc=docById(doctorId), usage=this._usage(doctorId,date); if(date===a.date&&a.time&&usage[a.time]) usage[a.time].count=Math.max(0,usage[a.time].count-1);
    if(by!=='staff'){ const av=computeAvailability(doc,date,usage); const s=av.slots.find(x=>x.time===time); if(!s||!s.free) throw appErr('slot_taken','Ye slot available nahi hai'); }
    if(date!==a.date){ const tokens=state.appointments.filter(x=>x.doctorId===doctorId&&x.date===date&&x.tokenNo<100).map(x=>x.tokenNo); a.tokenNo=Math.max(0,...tokens)+1; }
    const stk=slotTokenNo(doc,date,time); if(stk) a.tokenNo=stk;
    a.date=date; a.time=time; a.rescheduledAt=new Date().toISOString(); a.notifyDoctor=by==='patient'; await this.persist(); return a;
  },
  async getAppointment(doctorId,id){ return state.appointments.find(a=>a.doctorId===doctorId&&a.id===id)||null; },
  async findByCode(doctorId,code,phone){
    const cd='AD-'+String(code||'').trim().toUpperCase().replace(/^AD-/,'');
    const a=state.appointments.find(x=>x.doctorId===doctorId&&apptCode(x.id)===cd&&normPhone(x.patientPhone)===normPhone(phone));
    return a||null;
  },
  async joinWaitlist(w){ const e=escDeep({id:uid(),doctorId:w.doctorId,date:w.date,patientName:w.name,patientPhone:normPhone(w.phone),createdAt:new Date().toISOString()}); state.waitlist.push(e); await this.persist(); return e; },
  async saveFile(file){ const isImg=/^image\//.test(file.type); const dataUrl=isImg?await fileToDataUrl(file,1000,0.8):await readAsDataUrl(file); return {dataUrl, mimeType:isImg?'image/jpeg':file.type, size:file.size}; },
  async createDoctorRecords(){}, async flush(){},
};
function appErr(code,msg){ const e=new Error(msg); e.code='app/'+code; return e; }
function readAsDataUrl(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(r.result); r.onerror=()=>rej(new Error('File read failed')); r.readAsDataURL(file); }); }
async function fileToDataUrl(file, maxDim, q){
  const url=await readAsDataUrl(file); if(!/^image\//.test(file.type)) return url;
  return new Promise(res=>{ const img=new Image(); img.onload=()=>{ const s=Math.min(1,maxDim/Math.max(img.width,img.height)); const c=document.createElement('canvas'); c.width=Math.round(img.width*s); c.height=Math.round(img.height*s); const x=c.getContext('2d'); x.fillStyle='#fff'; x.fillRect(0,0,c.width,c.height); x.drawImage(img,0,0,c.width,c.height); res(c.toDataURL('image/jpeg',q||0.8)); }; img.onerror=()=>res(url); img.src=url; });
}

/* ================= FIREBASE BACKEND ================= */
let FB=null;
const FirebaseBackend = {
  mode:'firebase', _unsubs:[], _authCb:null,
  async init(){
    FB = await window.__fbReady; if(!FB) throw new Error('Firebase SDK load nahi hua (internet check karein)');
    await new Promise(resolve=>{ let first=true; FB.S.onAuthStateChanged(FB.auth, async user=>{ try{ await this._onUser(user); }catch(e){ console.error(e); } if(first){ first=false; resolve(); } else if(this._authCb) this._authCb(session); }); });
  },
  async _onUser(user){
    const S=FB.S, db=FB.db; session={role:null,uid:null,doctorId:null,email:null,phone:null,mustChange:false,blocked:session.blocked};
    if(!user) return;
    const prov=(user.providerData[0]||{}).providerId;
    if(prov==='phone'){ session={role:'patient',uid:user.uid,doctorId:null,email:null,phone:normPhone(user.phoneNumber||''),mustChange:false,blocked:null}; return; }
    const sa=await S.getDoc(S.doc(db,'superadmins',user.uid));
    if(sa.exists()){ session={role:'superadmin',uid:user.uid,doctorId:null,email:user.email,phone:null,mustChange:false,blocked:null}; return; }
    const ds=await S.getDoc(S.doc(db,'doctors',user.uid));
    if(ds.exists()){
      if(ds.data().active===false||ds.data().deleted){ session.blocked='inactive'; await S.signOut(FB.auth); return; }
      let must=false; try{ const pv=await S.getDoc(S.doc(db,'doctors',user.uid,'private','account')); must=pv.exists()&&pv.data().mustChangePassword===true; }catch(e){}
      session={role:'doctor',uid:user.uid,doctorId:user.uid,email:user.email,phone:null,mustChange:must,blocked:null}; return;
    }
    await S.signOut(FB.auth);
  },
  async signInStaff(idOrEmail,pw){
    const S=FB.S; let email=String(idOrEmail||'').trim();
    if(!email.includes('@')){ const li=await S.getDoc(S.doc(FB.db,'loginIndex',email.toLowerCase())); if(!li.exists()){ const e=new Error('Login ID ya Password galat hai'); e.code='auth/invalid-credential'; throw e; } email=li.data().email; }
    session.blocked=null;
    const cred=await S.signInWithEmailAndPassword(FB.auth,email,pw); await this._onUser(cred.user);
    if(!session.role){ const e=new Error(session.blocked==='inactive'?'Account deactivated':'Ye account kisi role se juda nahi hai'); e.code=session.blocked==='inactive'?'app/inactive':'app/norole'; throw e; }
    return session;
  },
  async signOut(){ this._unsubs.forEach(u=>u()); this._unsubs=[]; await FB.S.signOut(FB.auth); session={role:null,uid:null,doctorId:null,email:null,phone:null,mustChange:false,blocked:null}; },
  async sendReset(email){ await FB.S.sendPasswordResetEmail(FB.auth,email); },
  async changePassword(cur,next){
    const S=FB.S, u=FB.auth.currentUser; if(!u) throw new Error('Login karein');
    if(cur!==null){ await S.reauthenticateWithCredential(u, S.EmailAuthProvider.credential(u.email,cur)); }
    await S.updatePassword(u,next);
    if(session.role==='doctor'&&session.mustChange){ await S.updateDoc(S.doc(FB.db,'doctors',u.uid,'private','account'),{mustChangePassword:false}); session.mustChange=false; }
  },
  async createDoctorAccount(email){
    const S=FB.S, temp=genPassword(), sapp=S.initializeApp(APP_CONFIG.firebase,'sec'+Date.now()), sauth=S.getAuth(sapp);
    try{ const cred=await S.createUserWithEmailAndPassword(sauth,email,temp); await S.signOut(sauth); return {uid:cred.user.uid,tempPassword:temp}; }
    finally{ try{ await S.deleteApp(sapp); }catch(e){} }
  },
  async resetDoctorPassword(d){ await FB.S.sendPasswordResetEmail(FB.auth,d.email); return null; },
  _conf:null, _rc:null,
  async phoneStart(phone){
    const S=FB.S; if(!this._rc){ this._rc=new S.RecaptchaVerifier(FB.auth,'recaptcha-container',{size:'invisible'}); }
    this._conf=await S.signInWithPhoneNumber(FB.auth,e164(phone),this._rc); return {};
  },
  async phoneVerify(code){ if(!this._conf) throw new Error('Pehle OTP mangwayein'); const cred=await this._conf.confirm(String(code).trim()); await this._onUser(cred.user); return session; },
  _ing(coll,snap,doctorId){
    const docs=snap.docs.map(d=>normalizeItem(coll,escDeep({id:d.id,doctorId,...d.data()})));
    state[coll]=state[coll].filter(x=>x.doctorId!==doctorId).concat(docs);
    Object.keys(baseline.coll[coll]).forEach(id=>{ if(baseline.coll[coll][id].doctorId===doctorId) delete baseline.coll[coll][id]; });
    docs.forEach(x=>{ baseline.coll[coll][x.id]={json:jsonOf(x),doctorId}; });
  },
  _doctorFrom(id,pub,priv){ const d=normalizeDoctor(escDeep(Object.assign({id},pub||{},priv||{}))); return d; },
  async loadDirectory(){
    const S=FB.S; const snap=await S.getDocs(S.query(S.collection(FB.db,'doctors'),S.where('active','==',true)));
    state.doctors=snap.docs.map(d=>this._doctorFrom(d.id,d.data())).filter(d=>!d.deleted); await this.loadPlatform(); resetBaseline();
  },
  async loadPlatform(){ const S=FB.S; try{ const p=await S.getDoc(S.doc(FB.db,'platform','public')); if(p.exists()) state.platform.public=p.data(); }catch(e){} },
  async loadDoctorPublic(slug){
    const S=FB.S; const sl=await S.getDoc(S.doc(FB.db,'slugs',slug)); if(!sl.exists()) return null;
    const id=sl.data().doctorId, ds=await S.getDoc(S.doc(FB.db,'doctors',id)); if(!ds.exists()) return null;
    const d=this._doctorFrom(id,ds.data()); state.doctors=[d]; await this.loadPlatform(); await this.loadPublicReviews(id); resetBaseline(); return d.deleted?null:d;
  },
  async loadPublicReviews(doctorId){ const S=FB.S; try{ const snap=await S.getDocs(S.query(S.collection(FB.db,'doctors',doctorId,'reviews'),S.where('hidden','==',false))); this._ing('reviews',snap,doctorId); }catch(e){ console.warn('reviews',e); } },
  async loadPatientData(doctorId){
    const S=FB.S, db=FB.db, ph=e164(session.phone);
    for(const c of ['appointments','documents']){ try{ const snap=await S.getDocs(S.query(S.collection(db,'doctors',doctorId,c),S.where('patientPhoneE164','==',ph))); this._ing(c,snap,doctorId); }catch(e){ console.warn(c,e); } }
    try{ const snap=await S.getDocs(S.collection(db,'patientProfiles',session.uid,'family')); state.familyMembers=snap.docs.map(d=>escDeep({id:d.id,...d.data()})); }catch(e){ state.familyMembers=[]; }
    resetBaseline();
  },
  async loadScope(){
    const S=FB.S, db=FB.db;
    if(session.role==='doctor'){
      const id=session.doctorId; const [ds,pv]=await Promise.all([S.getDoc(S.doc(db,'doctors',id)),S.getDoc(S.doc(db,'doctors',id,'private','account'))]);
      state.doctors=[this._doctorFrom(id,ds.data(),pv.exists()?pv.data():{})]; await this.loadPlatform();
      await Promise.all(DOC_COLLS.map(c=>new Promise((resolve)=>{ let first=true; const un=S.onSnapshot(S.collection(db,'doctors',id,c),snap=>{ this._ing(c,snap,id); if(first){ first=false; resolve(); } else scheduleRerender(); },err=>{ console.error(c,err); if(first){ first=false; resolve(); } }); this._unsubs.push(un); })));
      const un2=S.onSnapshot(S.doc(db,'doctors',id),snap=>{ if(!snap.exists()) return; const cur=docById(id)||{}; const nd=this._doctorFrom(id,snap.data(),{subscription:cur.subscription,loginId:cur.loginId,mobile:cur.mobile,email:cur.email}); if(jsonOf(nd)!==baseline.doctors[id]&&!snap.metadata.hasPendingWrites){ const i=state.doctors.findIndex(x=>x.id===id); if(i>=0) state.doctors[i]=nd; baseline.doctors[id]=jsonOf(nd); scheduleRerender(); } }); this._unsubs.push(un2);
    } else if(session.role==='superadmin'){
      const [ps,pubs,plat,pub]=await Promise.all([S.getDocs(S.collection(db,'doctors')),S.getDocs(S.collectionGroup(db,'private')),S.getDoc(S.doc(db,'platform','settings')),S.getDoc(S.doc(db,'platform','public'))]);
      const priv={}; pubs.docs.forEach(d=>{ const did=d.ref.parent.parent.id; priv[did]=d.data(); });
      state.doctors=ps.docs.map(d=>this._doctorFrom(d.id,d.data(),priv[d.id]));
      if(plat.exists()) state.platform.settings=Object.assign(state.platform.settings,plat.data()); if(pub.exists()) state.platform.public=pub.data();
      for(const c of ['appointments','payments','waitlist']){ const snap=await S.getDocs(S.collectionGroup(db,c)); state[c]=snap.docs.map(d=>normalizeItem(c,escDeep({id:d.id,doctorId:d.ref.parent.parent.id,...d.data()}))); }
      ['histories','ledger','documents','reviews','patients'].forEach(c=>{ state[c]=[]; });
    }
    resetBaseline();
  },
  async loadDoctorDetail(doctorId){ const S=FB.S; for(const c of ['histories','ledger','documents','reviews','patients']){ const snap=await S.getDocs(S.collection(FB.db,'doctors',doctorId,c)); this._ing(c,snap,doctorId); } },
  async getSlotUsage(doctorId,date){ const S=FB.S; const snap=await S.getDocs(S.query(S.collection(FB.db,'doctors',doctorId,'slots'),S.where('date','==',date))); const u={}; snap.docs.forEach(d=>{ const dt=d.data(), tt=dt.time; if(!u[tt]) u[tt]={count:0,completed:0}; u[tt].count++; if(dt.completed) u[tt].completed++; }); return u; },
  async setCurrentToken(doctorId,date,tokenNo){ const S=FB.S; await S.setDoc(S.doc(FB.db,'doctors',doctorId,'counters',date),{currentToken:tokenNo||null},{merge:true}); },
  async getCurrentToken(doctorId,date){ const S=FB.S; const s=await S.getDoc(S.doc(FB.db,'doctors',doctorId,'counters',date)); return s.exists()?(s.data().currentToken||null):null; },
  async markSlotCompleted(doctorId,slotKey){ if(!slotKey) return; const S=FB.S; try{ await S.updateDoc(S.doc(FB.db,'doctors',doctorId,'slots',slotKey),{completed:true}); }catch(e){ console.warn('slot complete sync',e); } },
  async flush(ops){
    const S=FB.S, db=FB.db; let batch=S.writeBatch(db), n=0; const commit=async()=>{ if(n){ await batch.commit(); batch=S.writeBatch(db); n=0; } };
    const PRIV=['loginId','mobile','email','subscription','mustChangePassword','notes'];
    for(const o of ops){
      if(o.kind==='doctor'){
        const raw=unescDeep(o.data), pub={}, priv={}; Object.keys(raw).forEach(k=>{ if(k==='id') return; if(PRIV.includes(k)) priv[k]=raw[k]; else pub[k]=raw[k]; });
        const exp=(raw.subscription&&raw.subscription.expiry)||null; pub.subExpiry=exp; pub.subExpiryMs=exp?Date.parse(exp+'T23:59:59+05:30'):null;
        if(session.role==='superadmin'){ batch.set(S.doc(db,'doctors',o.id),pub); batch.set(S.doc(db,'doctors',o.id,'private','account'),priv,{merge:true}); batch.set(S.doc(db,'slugs',raw.slug),{doctorId:o.id}); if(raw.loginId&&raw.email) batch.set(S.doc(db,'loginIndex',String(raw.loginId).toLowerCase()),{email:raw.email,doctorId:o.id}); n+=4; }
        else { ['subExpiry','subExpiryMs','active','slug','createdAt','deleted','deletedAt','deactivatedReason'].forEach(k=>{ delete pub[k]; }); batch.update(S.doc(db,'doctors',o.id),pub); n++; }
      } else if(o.kind==='family'){
        const ref=S.doc(db,'patientProfiles',session.uid,'family',o.id); if(o.op==='set') batch.set(ref,unescDeep(o.data)); else batch.delete(ref); n++;
      } else {
        const ref=S.doc(db,'doctors',o.doctorId,o.coll,o.id);
        if(o.op==='set'){ const d=unescDeep(o.data); delete d.id; delete d.doctorId; d.doctorId=o.doctorId; batch.set(ref,d); n++;
          if(o.coll==='appointments'&&d.ticketId){ batch.set(S.doc(db,'doctors',o.doctorId,'tickets',d.ticketId),{status:d.status,date:d.date,time:d.time,slotKey:d.slotKey||null,slotIdx:d.slotIdx||1,tokenNo:d.tokenNo,paymentStatus:d.paymentStatus||'pending'},{merge:true}); n++; } }
        else { batch.delete(ref); n++; }
      }
      if(n>=400) await commit();
    }
    await commit();
  },
  /* ---- atomic booking / cancel / reschedule (client transactions; enforced by firestore.rules) ---- */
  async bookAppointment(input){
    const S=FB.S, db=FB.db, {doctorId,date,time}=input, p=input.patient, staff=!!input.staff;
    const apptRef=S.doc(S.collection(db,'doctors',doctorId,'appointments')), ticketRef=S.doc(S.collection(db,'doctors',doctorId,'tickets'));
    let useSlotTok=true;
    const txBook=async tx=>{
      const ds=await tx.get(S.doc(db,'doctors',doctorId)); if(!ds.exists()) throw appErr('not_found','Doctor nahi mila');
      const doc=normalizeDoctor({id:doctorId,...ds.data()});
      const ps=await tx.get(S.doc(db,'platform','public')), pubPolicy=ps.exists()?ps.data():{};
      if(!staff&&bookingClosedReason(doc,pubPolicy)) throw appErr('closed','Booking abhi available nahi hai');
      const sch=docSchedule(doc), cap=Math.max(1,Number(sch.maxPerSlot)||1);
      if(!staff){ const av=computeAvailability(doc,date,{}); const s=av.slots.find(x=>x.time===time&&x.free); if(!s) throw appErr('slot_taken','Ye slot available nahi hai'); }
      const key=date+'_'+time.replace(':',''); const refs=[]; for(let i=1;i<=cap;i++) refs.push(S.doc(db,'doctors',doctorId,'slots',key+'_'+i));
      const snaps=[]; for(const r of refs) snaps.push(await tx.get(r));
      const idx=snaps.findIndex(s=>!s.exists())+1; if(!idx) throw appErr('slot_taken','Ye slot abhi-abhi kisi aur ne book kar liya — kripya dusra slot chunein');
      const cref=S.doc(db,'doctors',doctorId,'counters',date), cs=await tx.get(cref);
      const issued=(cs.exists()?cs.data().issued:0)+1, active=(cs.exists()?cs.data().active:0)+1;
      if(!staff&&sch.maxPerDay>0&&active>sch.maxPerDay) throw appErr('day_full','Is din ki saari appointments full hain');
      const slotTok=useSlotTok?slotTokenNo(doc,date,time):null, tokenNo=slotTok||issued;
      const appt={ id:apptRef.id, doctorId, source:input.source||'patient', status:'booked', date, time, slotKey:key+'_'+idx, slotIdx:idx, tokenNo, fee:input.fee!=null?input.fee:doc.fee,
        paymentStatus:'pending', patientName:p.name, patientPhone:normPhone(p.phone), patientPhoneE164:e164(p.phone), patientAge:p.age||'', patientGender:p.gender||'', reason:p.reason||'', bookedFor:p.bookedFor||null, createdAt:new Date().toISOString(), notifyDoctor:input.source!=='manual', ticketId:ticketRef.id };
      const {id:_i,...store}=appt; tx.set(apptRef,store); tx.set(refs[idx-1],{apptId:apptRef.id,date,time,idx}); tx.set(cref,{issued,active,lastApptId:apptRef.id});
      const codeVal=apptCode(apptRef.id);
      tx.set(ticketRef,{apptId:apptRef.id,doctorId,date,time,slotKey:appt.slotKey,slotIdx:idx,tokenNo,status:'booked',paymentStatus:'pending',patientName:p.name,patientPhone:normPhone(p.phone),bookedFor:p.bookedFor||null,fee:appt.fee,createdAt:appt.createdAt,code:codeVal});
      tx.set(S.doc(db,'doctors',doctorId,'lookup',codeVal),{ticketId:ticketRef.id});
      return escDeep(appt);
    };
    let booked;
    try{ booked=await S.runTransaction(db,txBook); }
    catch(e){ if(useSlotTok&&e&&e.code==='permission-denied'){ console.warn('slot-number token rejected by rules, falling back to sequential token'); useSlotTok=false; booked=await S.runTransaction(db,txBook); } else throw e; }
    if(!state.appointments.find(x=>x.id===booked.id)) state.appointments.push(booked);
    return booked;
  },
  _ticketOf(apptId){ const a=state.appointments.find(x=>x.id===apptId); return a&&a.ticketId; },
  async cancelAppointment(doctorId,apptId,by){
    const S=FB.S, db=FB.db, tid=this._ticketOf(apptId); if(!tid) throw appErr('not_found','Appointment nahi mili');
    const tref=S.doc(db,'doctors',doctorId,'tickets',tid), aref=S.doc(db,'doctors',doctorId,'appointments',apptId);
    await S.runTransaction(db, async tx=>{
      const ts=await tx.get(tref); if(!ts.exists()) throw appErr('not_found','Appointment nahi mili'); const t=ts.data();
      if(by==='staff'?!isOpenStatus(t.status):!['booked','confirmed'].includes(t.status)) throw appErr('bad_state','Ye appointment ab cancel nahi ho sakti');
      const cref=S.doc(db,'doctors',doctorId,'counters',t.date), cs=await tx.get(cref);
      tx.update(tref,{status:'cancelled'});
      tx.update(aref,{status:'cancelled',cancelledBy:by||'patient',cancelledAt:new Date().toISOString(),notifyDoctor:by==='patient'});
      if(t.slotKey) tx.delete(S.doc(db,'doctors',doctorId,'slots',t.slotKey));
      if(cs.exists()) tx.update(cref,{issued:cs.data().issued,active:Math.max(0,cs.data().active-1),lastApptId:apptId});
    });
    const a=state.appointments.find(x=>x.id===apptId); if(a){ a.status='cancelled'; a.cancelledBy=by||'patient'; } return a;
  },
  async rescheduleAppointment(doctorId,apptId,date,time,by){
    const S=FB.S, db=FB.db, tid=this._ticketOf(apptId); if(!tid) throw appErr('not_found','Appointment nahi mili');
    const tref=S.doc(db,'doctors',doctorId,'tickets',tid), aref=S.doc(db,'doctors',doctorId,'appointments',apptId); let result=null, useSlotTok=true;
    const txResch=async tx=>{
      const ts=await tx.get(tref); if(!ts.exists()) throw appErr('not_found','Appointment nahi mili'); const a=ts.data();
      if(by==='staff'?!isOpenStatus(a.status):!['booked','confirmed'].includes(a.status)) throw appErr('bad_state','Ye appointment reschedule nahi ho sakti');
      const ds=await tx.get(S.doc(db,'doctors',doctorId)); const doc=normalizeDoctor({id:doctorId,...ds.data()}), sch=docSchedule(doc), cap=Math.max(1,Number(sch.maxPerSlot)||1);
      if(by!=='staff'){ const av=computeAvailability(doc,date,{}); if(!av.slots.find(x=>x.time===time&&x.free)) throw appErr('slot_taken','Ye slot available nahi hai'); }
      const key=date+'_'+time.replace(':',''); const refs=[]; for(let i=1;i<=cap;i++) refs.push(S.doc(db,'doctors',doctorId,'slots',key+'_'+i));
      const snaps=[]; for(const r of refs) snaps.push(await tx.get(r));
      const idx=snaps.findIndex(s=>!s.exists())+1; if(!idx) throw appErr('slot_taken','Ye slot available nahi hai');
      const sameDay=date===a.date; const ocref=S.doc(db,'doctors',doctorId,'counters',a.date), ocs=await tx.get(ocref);
      const ncref=sameDay?ocref:S.doc(db,'doctors',doctorId,'counters',date), ncs=sameDay?ocs:await tx.get(ncref);
      let token=a.tokenNo; const upd={date,time,slotKey:key+'_'+idx,slotIdx:idx};
      if(!sameDay){ const issued=(ncs.exists()?ncs.data().issued:0)+1, active=(ncs.exists()?ncs.data().active:0)+1; token=issued; upd.tokenNo=issued;
        if(ocs.exists()) tx.update(ocref,{issued:ocs.data().issued,active:Math.max(0,ocs.data().active-1),lastApptId:apptId}); tx.set(ncref,{issued,active,lastApptId:apptId}); }
      const slotTok=useSlotTok?slotTokenNo(doc,date,time):null; if(slotTok){ token=slotTok; upd.tokenNo=slotTok; }
      if(a.slotKey) tx.delete(S.doc(db,'doctors',doctorId,'slots',a.slotKey));
      tx.set(refs[idx-1],{apptId,date,time,idx}); tx.update(tref,upd); tx.update(aref,Object.assign({},upd,{rescheduledAt:new Date().toISOString(),notifyDoctor:by==='patient'})); result={...upd,tokenNo:token};
    };
    try{ await S.runTransaction(db,txResch); }
    catch(e){ if(useSlotTok&&e&&e.code==='permission-denied'){ useSlotTok=false; await S.runTransaction(db,txResch); } else throw e; }
    const a=state.appointments.find(x=>x.id===apptId); if(a&&result) Object.assign(a,result); return a;
  },
  async getAppointment(doctorId,tid){ const S=FB.S; const s=await S.getDoc(S.doc(FB.db,'doctors',doctorId,'tickets',tid)); if(!s.exists()) return null; const t=s.data();
    return normalizeItem('appointments',escDeep({id:t.apptId,ticketId:s.id,doctorId,date:t.date,time:t.time,slotKey:t.slotKey,slotIdx:t.slotIdx,tokenNo:t.tokenNo,status:t.status,patientName:t.patientName,bookedFor:t.bookedFor,fee:t.fee,paymentStatus:t.paymentStatus||'pending',patientPhone:t.patientPhone||''})); },
  async findByCode(doctorId,code,phone){
    const S=FB.S, cd=String(code||'').trim().toUpperCase().replace(/^AD-/,''), full='AD-'+cd;
    const ls=await S.getDoc(S.doc(FB.db,'doctors',doctorId,'lookup',full)); if(!ls.exists()) return null;
    const a=await this.getAppointment(doctorId,ls.data().ticketId); if(!a) return null;
    if(normPhone(a.patientPhone)!==normPhone(phone)) return null;
    return a;
  },
  async joinWaitlist(w){ const S=FB.S; const ref=S.doc(S.collection(FB.db,'doctors',w.doctorId,'waitlist')); const data={date:w.date,patientName:w.name,patientPhone:normPhone(w.phone),doctorId:w.doctorId,createdAt:new Date().toISOString()}; await S.setDoc(ref,data); return escDeep({id:ref.id,...data}); },
  async saveFile(file,hint){
    const S=FB.S, isImg=/^image\//.test(file.type);
    if(isImg&&file.size<600*1024||(isImg&&!hint)) { const dataUrl=await fileToDataUrl(file,1000,0.8); return {dataUrl,mimeType:'image/jpeg',size:file.size}; }
    const path='uploads/'+((hint&&hint.doctorId)||'misc')+'/'+uid()+'_'+file.name.replace(/[^A-Za-z0-9._-]/g,'_');
    const ref=S.storageRef(FB.storage,path); await S.uploadBytes(ref,file,{contentType:file.type}); const url=await S.getDownloadURL(ref);
    return {dataUrl:url,storagePath:path,mimeType:file.type,size:file.size};
  },
  async createDoctorRecords(){},
  async savePlatform(){ const S=FB.S; await S.setDoc(S.doc(FB.db,'platform','settings'),state.platform.settings); await S.setDoc(S.doc(FB.db,'platform','public'),state.platform.public); },
};
const Backend = FIREBASE_MODE ? FirebaseBackend : DemoBackend;
async function savePlatform(){ if(FIREBASE_MODE) await FirebaseBackend.savePlatform(); else await DemoBackend.persist(); }

/* ================= UI COMMON ================= */
const $ = id=>document.getElementById(id);
function openModal(html, opts){ opts=opts||{}; const root=$('modal-root'); root.innerHTML=`<div class="modal-backdrop"><div class="modal ${opts.wide?'wide':''}"><button class="modal-close" id="close-m" aria-label="Close">${ICONS.x}</button>${html}</div></div>`; $('close-m').onclick=closeModal; return root; }
function closeModal(){ $('modal-root').innerHTML=''; }
function chipsHtml(items, active, attr){ return `<div class="chips">${items.map(i=>`<button class="chip ${i.id===active?'on':''}" ${attr}="${i.id}">${i.label}</button>`).join('')}</div>`; }
function kpi(label,val,sub,color){ return `<div class="kpi"><div class="kv" ${color?`style="color:${color}"`:''}>${val}</div><div class="kl">${label}</div>${sub?`<div class="ks">${sub}</div>`:''}</div>`; }
function emptyBox(msg, icon){ return `<div class="empty">${ICONS[icon||'empty']}<div style="margin-top:8px;">${msg}</div></div>`; }
function switchRow(id,title,desc,on){ return `<div class="switch"><div><div class="t">${title}</div>${desc?`<div class="d">${desc}</div>`:''}</div><input type="checkbox" id="${id}" ${on?'checked':''}></div>`; }
function money(n){ return '₹'+Number(n||0).toLocaleString('en-IN'); }
function maskPhone(p){ const d=String(p||''); return d.length>=4?'••••••'+d.slice(-4):d; }
function showLoading(msg){ $('root').innerHTML=`<div style="padding:80px 20px; text-align:center;"><div class="spinner"></div><div class="muted" style="margin-top:10px;">${msg||'Loading…'}</div></div>`; }
function errMsg(e){ const c=(e&&e.code)||''; const m={'auth/invalid-credential':'Login ID ya Password galat hai','auth/wrong-password':'Password galat hai','auth/user-not-found':'Login ID ya Password galat hai','auth/invalid-login-credentials':'Login ID ya Password galat hai','auth/too-many-requests':'Bahut zyada koshish — thodi der baad try karein','auth/network-request-failed':'Internet check karein','auth/email-already-in-use':'Ye email pehle se registered hai','auth/weak-password':'Password kam se kam 8 characters ka rakhein','auth/invalid-verification-code':'OTP galat hai','auth/invalid-phone-number':'Phone number sahi nahi hai','auth/requires-recent-login':'Security ke liye dobara login karke try karein','permission-denied':'Permission nahi hai (security rules)'}; return m[c]||(e&&e.message)||'Kuch galat ho gaya'; }

/* ---- links ---- */
function siteBase(){ return APP_CONFIG.siteUrl ? APP_CONFIG.siteUrl.replace(/\/$/,'') : null; }
function publicUrl(slug){ const b=siteBase(); if(APP_CONFIG.usePathRoutes) return (b||location.origin)+'/book/'+slug; return (b?b+'/':location.origin+location.pathname)+'#/book/'+slug; }
function apptKey(a){ return a.ticketId||a.id; }
function apptUrl(slug,id){ const b=siteBase(); if(APP_CONFIG.usePathRoutes) return (b||location.origin)+'/appt/'+slug+'/'+id; return (b?b+'/':location.origin+location.pathname)+'#/appt/'+slug+'/'+id; }
function loginUrl(){ const b=siteBase(); if(APP_CONFIG.usePathRoutes) return (b||location.origin)+'/login'; return (b?b+'/':location.origin+location.pathname)+'#/login'; }
function go(hash){ if(location.hash===hash) enterRoute(); else location.hash=hash; }

/* ---- router ---- */
function adoptPathRoute(){
  if(location.hash) return; const p=location.pathname.replace(/\/index\.html$/,''); let m, h=null;
  if((m=p.match(/\/book\/([^\/]+)\/?$/))) h='#/book/'+m[1]; else if((m=p.match(/\/appt\/([^\/]+)\/([^\/]+)\/?$/))) h='#/appt/'+m[1]+'/'+m[2];
  else if(/\/superadmin\/?$/.test(p)) h='#/superadmin'; else if(/\/login\/?$/.test(p)) h='#/login'; else if(/\/(doctor|admin)\/?$/.test(p)) h='#/doctor';
  if(h){ const base=p.replace(/\/(book|appt)\/.*$/,'').replace(/\/(superadmin|login|doctor|admin)\/?$/,''); history.replaceState(null,'',(base||'')+'/'+h); }
}
function parseRoute(){
  const h=location.hash||''; let m;
  if((m=h.match(/^#\/book\/([^\/?]+)/))) ui.route={type:'public',slug:decodeURIComponent(m[1])};
  else if((m=h.match(/^#\/appt\/([^\/]+)\/([^\/?]+)/))) ui.route={type:'appt',slug:decodeURIComponent(m[1]),apptId:decodeURIComponent(m[2])};
  else if((m=h.match(/^#\/(my|patient|upload)\/([^\/?]+)/))) ui.route={type:'my',slug:decodeURIComponent(m[2])};
  else if(h==='#/superadmin') ui.route={type:'superadmin'};
  else if(h==='#/doctor'||h.startsWith('#/admin')) ui.route={type:session.role==='doctor'||session.role==='superadmin'?'doctor':'login'};
  else if(h==='#/login') ui.route={type:'login'};
  else ui.route={type:'directory'};
}
function clearState(){ if(!FIREBASE_MODE) return; ['doctors','appointments','histories','payments','ledger','documents','reviews','familyMembers','waitlist','patients'].forEach(k=>{ state[k]=[]; }); resetBaseline(); }
let routeSeq=0;
async function enterRoute(){
  const seq=++routeSeq; parseRoute(); const r=ui.route; ui.previewMode=false; ui.booking={date:null,time:null}; ui.selectedPatientPhone=null;
  if(r.type==='doctor'&&session.role==='superadmin'&&!ui.viewAsDoctorId){ location.hash='#/superadmin'; return; }
  if(r.type==='doctor'&&!session.role){ location.hash='#/login'; return; }
  if(r.type==='doctor'&&session.role==='patient'){ location.hash='#/login'; return; }
  showLoading();
  try{
    if(r.type==='directory') await Backend.loadDirectory();
    else if(r.type==='public'||r.type==='appt'||r.type==='my'){
      if(session.role==='doctor'||session.role==='superadmin'){ if(FIREBASE_MODE) clearState(); }
      const d=await Backend.loadDoctorPublic(r.slug); r.doctorId=d?d.id:null; r.notFound=!d;
      if(d&&r.type==='my'&&session.role==='patient') await Backend.loadPatientData(d.id);
      if(d&&r.type==='appt'){ r.appt=await Backend.getAppointment(d.id,r.apptId); if(r.appt&&!state.appointments.find(a=>a.id===r.appt.id)) state.appointments.push(r.appt);
        if(r.appt&&r.appt.date===todayStr()){ try{ r.currentToken=await Backend.getCurrentToken(d.id,r.appt.date); }catch(e){ r.currentToken=null; } } }
    }
    else if(r.type==='doctor'){ if(session.role==='doctor'){ await Backend.loadScope(); r.doctorId=session.doctorId; } else { r.doctorId=ui.viewAsDoctorId; await Backend.loadDoctorDetail(r.doctorId); } }
    else if(r.type==='superadmin'&&session.role==='superadmin'){ await Backend.loadScope(); applyExpiryPolicy(); }
  }catch(e){ console.error(e); if(seq===routeSeq) toast('Data load nahi hua: '+errMsg(e)); }
  if(seq!==routeSeq) return;
  try{ renderRoot(); }
  catch(e){
    console.error('renderRoot crashed', e);
    const root=document.getElementById('root');
    if(root) root.innerHTML=`<div style="padding:60px 20px;text-align:center;"><h3>Ye page load nahi ho paya</h3><div class="muted" style="margin-top:8px;">Kuch gadbad hui — baaki app kaam karta rahega.</div><button class="btn btn-coral mt" onclick="location.hash='#/';location.reload()">Home par jaayein</button></div>`;
  }
  window.scrollTo(0,0);
}
function renderRoot(){
  const r=ui.route, strip=$('demo-strip'); if(strip) strip.innerHTML = FIREBASE_MODE?'':'<div class="demo-strip">DEMO MODE — data is stored only in this browser and is NOT secure. Paste your Firebase config to go live (see SETUP.md).</div>';
  if(r.type==='directory') renderDirectory();
  else if(r.type==='public') renderPublic();
  else if(r.type==='appt') renderApptPage();
  else if(r.type==='my') renderMyPortal();
  else if(r.type==='login') renderStaffLogin();
  else if(r.type==='doctor') renderAdmin();
  else if(r.type==='superadmin') renderSuperadmin();
}
window.addEventListener('hashchange', ()=>{ enterRoute(); });

/* ---- staff shell (doctor + superadmin): sidebar on desktop, bottom nav on mobile ---- */
function staffShell(cfg){
  const root=$('root'), nav=cfg.nav, primary=nav.slice(0,4), rest=nav.slice(4);
  root.innerHTML=`
    <div class="shell">
      <aside class="side">
        <div class="brand-row"><div class="brand-mark" style="${cfg.markStyle||''}">${cfg.mark||'A'}</div><div><div class="brand-name" style="font-size:18px;">${APP_CONFIG.brand}</div><div class="brand-sub">${cfg.sub||''}</div></div></div>
        <div class="who"><b>${cfg.whoName||''}</b>${cfg.whoSub||''}</div>
        ${nav.map(n=>`<button class="nb ${n.id===cfg.active?'on':''}" data-nav="${n.id}">${ICONS[n.icon]||''}<span>${n.label}</span></button>`).join('')}
        <div class="grow"></div>
        ${cfg.sideExtra||''}
        <button class="nb" id="sh-logout">${ICONS.lock}<span>Logout</span></button>
      </aside>
      <main class="main"><div class="mtop"><h2>${cfg.title}</h2><div class="row gap8" style="align-items:center;">${cfg.actions||''}</div></div><div id="view"></div></main>
    </div>
    <nav class="bnav">
      ${primary.map(n=>`<button class="${n.id===cfg.active?'on':''}" data-nav="${n.id}">${ICONS[n.icon]||''}<span>${n.label.split(' ')[0]}</span></button>`).join('')}
      <button class="${rest.some(n=>n.id===cfg.active)?'on':''}" id="bn-more">${ICONS.list}<span>More</span></button>
    </nav>`;
  root.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>cfg.onNav(b.dataset.nav)));
  $('sh-logout').onclick=doLogout;
  $('bn-more').onclick=()=>{ openModal(`<h3>Menu</h3><div class="mt">${rest.map(n=>`<button class="menu-item" data-more="${n.id}">${ICONS[n.icon]||''} ${n.label}</button>`).join('')}<button class="menu-item" id="mm-theme">${ICONS.image} Change theme</button><button class="menu-item danger" id="mm-logout">${ICONS.lock} Logout</button></div>`); document.querySelectorAll('[data-more]').forEach(b=>b.onclick=()=>{ closeModal(); cfg.onNav(b.dataset.more); }); $('mm-logout').onclick=()=>{ closeModal(); doLogout(); }; $('mm-theme').onclick=()=>{ cycleTheme(); }; };
  return $('view');
}
async function doLogout(){ try{ await Backend.signOut(); }catch(e){} ui.viewAsDoctorId=null; ui.adminTab='overview'; clearState(); toast('Logged out'); if(location.hash==='#/login'||location.hash==='') enterRoute(); else location.hash='#/login'; }

/* ---- login screens ---- */
function renderStaffLogin(){
  const root=$('root'), blocked=session.blocked==='inactive';
  if(session.role==='doctor'){ go('#/doctor'); return; }
  root.innerHTML=`
    <div class="login-wrap"><div class="login-card">
      <div class="login-mark">${ICONS.lock}</div><h2>Doctor Login</h2><div class="sub">Apne clinic ka dashboard kholne ke liye login karein</div>
      ${blocked?`<div class="banner bad">Aapka account deactivate hai. Kripya platform admin se sampark karein.</div>`:''}
      <div class="field"><label>Login ID ya Email</label><input id="dl-id" autocomplete="username" placeholder="e.g. anjali_mehta_0001"></div>
      <div class="field"><label>Password</label><input type="password" id="dl-pass" autocomplete="current-password" placeholder="Password"></div>
      <button class="btn btn-coral btn-block" id="dl-submit">${ICONS.lock} Login</button>
      <button class="login-back" id="dl-forgot" style="margin-top:12px;">Password bhool gaye?</button>
      <button class="login-back" id="dl-back">← Home</button>
    </div></div>`;
  const submit=async()=>{ const id=$('dl-id').value.trim(), pw=$('dl-pass').value; if(!id||!pw){ toast('Login ID aur Password daalein'); return; }
    const b=$('dl-submit'); b.disabled=true;
    try{ session.blocked=null; const s=await Backend.signInStaff(id,pw); if(s.role==='superadmin'){ await Backend.signOut(); toast('SuperAdmin ke liye alag login hai'); location.hash='#/superadmin'; return; } go('#/doctor'); }
    catch(e){ b.disabled=false; if(e.code==='app/inactive'){ session.blocked='inactive'; renderStaffLogin(); } else toast(errMsg(e)); } };
  $('dl-submit').onclick=submit; ['dl-id','dl-pass'].forEach(i=>$(i).addEventListener('keydown',e=>{ if(e.key==='Enter') submit(); }));
  $('dl-back').onclick=()=>{ location.hash=''; };
  $('dl-forgot').onclick=()=>openResetModal();
}
function openResetModal(){
  openModal(`<h3>Password reset</h3><div class="sub">${FIREBASE_MODE?'Apna registered email daalein — reset link bheja jayega.':'Demo mode mein email nahi ja sakta. Platform admin se "Reset Password" karwayein.'}</div>
    ${FIREBASE_MODE?`<div class="field"><label>Email</label><input id="rp-email" type="email"></div><button class="btn btn-coral btn-block" id="rp-go">Send reset link</button>`:''}`);
  const b=$('rp-go'); if(b) b.onclick=async()=>{ const em=$('rp-email').value.trim(); if(!em) return; try{ await Backend.sendReset(em); }catch(e){ if(e.code!=='auth/user-not-found') { toast(errMsg(e)); return; } } closeModal(); toast('Agar ye email registered hai to reset link bhej diya gaya hai'); };
}
function renderForceChange(){
  $('root').innerHTML=`<div class="login-wrap"><div class="login-card"><div class="login-mark">${ICONS.shield}</div><h2>Naya password set karein</h2><div class="sub">Security ke liye temporary password badalna zaroori hai.</div>
    <div class="field"><label>New password (min 8 characters)</label><input type="password" id="fc-1" autocomplete="new-password"></div>
    <div class="field"><label>Confirm p
