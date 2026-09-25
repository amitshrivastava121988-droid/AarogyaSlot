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
  cloudinary:{
    // Patient documents (reports/prescriptions) upload here instead of Firebase Storage,
    // since Firebase Storage needs the paid Blaze plan and Cloudinary's free tier doesn't.
    // Cloudinary Dashboard (cloudinary.com) → Cloud name is shown top-left under your account name.
    // Then Settings (gear icon) → Upload → Upload presets → "Add upload preset" → Signing Mode = Unsigned → Save → copy its name.
    cloudName:'dydugugig',
    uploadPreset:'zmffizjl',
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
  const tokenWise=!!sch.tokenWise;
  /* Token/number-wise booking: individual tokens must NOT auto-lock just because their
     nominal clock time has passed — patients don't arrive by fixed time in token mode.
     They only lock in bulk once the doctor's whole shift for the day is over. Time-slot
     (non-token) booking keeps the old per-slot time-based lock, since there the time is real. */
  const shiftOverMin = tokenWise && times.length ? (toMin(times[times.length-1]) + (Number(sch.slotMinutes)||15)) : null;
  res.slots=times.map((t,i)=>{
    const u=usage[t], used=u&&typeof u==='object'?u.count:(u||0), completedN=u&&typeof u==='object'?(u.completed||0):0;
    const skippedFlag=!!(u&&typeof u==='object'&&u.skipped), cancelledN=(u&&typeof u==='object'&&u.cancelled)||0;
    const past = tokenWise ? (date===today && nowMin>=shiftOverMin) : (date===today && toMin(t)<=nowMin);
    const completed = used>0 && completedN>=used;
    return { time:t, tokenIdx:i+1, used, capacity:cap, past, free:!past && !dayFull && used<cap, completed, skipped: skippedFlag&&!completed, cancelled: used===0 && cancelledN>0 };
  });
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
  _usage(doctorId,date){ const u={}; state.appointments.forEach(a=>{ if(a.doctorId===doctorId&&a.date===date){ const st=migrateStatus(a.status); if(!u[a.time]) u[a.time]={count:0,completed:0,cancelled:0,skipped:false}; if(st==='cancelled'){ u[a.time].cancelled++; return; } u[a.time].count++; if(st==='completed') u[a.time].completed++; if(a.skippedAt && st!=='completed') u[a.time].skipped=true; } }); return u; },
  async setCurrentToken(doctorId,date,tokenNo){ try{ const raw=localStorage.getItem(DEMO_KEY), p=raw?JSON.parse(raw):{}; p.currentTokens=p.currentTokens||{}; p.currentTokens[doctorId+'_'+date]=tokenNo||null; localStorage.setItem(DEMO_KEY,JSON.stringify(p)); }catch(e){} },
  async getCurrentToken(doctorId,date){ try{ const raw=localStorage.getItem(DEMO_KEY); if(!raw) return null; const p=JSON.parse(raw); return (p.currentTokens&&p.currentTokens[doctorId+'_'+date])||null; }catch(e){ return null; } },
  watchCurrentToken(doctorId,date,cb){ let last; const id=setInterval(async ()=>{ const v=await DemoBackend.getCurrentToken(doctorId,date); if(v!==last){ last=v; cb(v); } },2500); return ()=>clearInterval(id); },
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
/* Iteratively shrinks dimensions/quality until the JPEG fits under maxBytes (best-effort — stops after a few tries). */
async function compressImageDataUrl(file, maxBytes){
  const orig=await readAsDataUrl(file);
  let maxDim=1600, q=0.85, best=orig;
  for(let i=0;i<7;i++){
    best=await new Promise(res=>{ const img=new Image(); img.onload=()=>{ const s=Math.min(1,maxDim/Math.max(img.width,img.height)); const c=document.createElement('canvas'); c.width=Math.round(img.width*s); c.height=Math.round(img.height*s); const x=c.getContext('2d'); x.fillStyle='#fff'; x.fillRect(0,0,c.width,c.height); x.drawImage(img,0,0,c.width,c.height); res(c.toDataURL('image/jpeg',q)); }; img.onerror=()=>res(orig); img.src=orig; });
    const bytes=Math.ceil((best.length-best.indexOf(',')-1)*3/4);
    if(bytes<=maxBytes || (maxDim<=700 && q<=0.35)) break;
    q = q>0.5 ? q-0.15 : Math.max(0.3,q-0.05);
    maxDim = Math.max(700, Math.floor(maxDim*0.82));
  }
  return best;
}
/* Uploads a File or a base64 data-URL straight from the browser to Cloudinary (unsigned preset — no server/API-secret needed).
   Used for patient documents (reports/prescriptions) instead of Firebase Storage, since Storage needs the paid Blaze plan. */
async function uploadToCloudinary(fileOrDataUrl, filename){
  const cfg=APP_CONFIG.cloudinary||{};
  if(!cfg.cloudName || /YOUR_/.test(cfg.cloudName) || !cfg.uploadPreset || /YOUR_/.test(cfg.uploadPreset)) throw appErr('cloud_not_set','Document upload abhi set up nahi hai — APP_CONFIG mein Cloudinary cloud name/preset daalein (SETUP.md dekhein)');
  const fd=new FormData();
  fd.append('file', fileOrDataUrl);
  fd.append('upload_preset', cfg.uploadPreset);
  if(filename) fd.append('filename_override', filename.replace(/[^A-Za-z0-9._-]/g,'_'));
  let res;
  try{ res=await fetch(`https://api.cloudinary.com/v1_1/${cfg.cloudName}/auto/upload`, { method:'POST', body:fd }); }
  catch(e){ throw appErr('upload_failed','Upload fail ho gaya — internet connection check karein'); }
  if(!res.ok) throw appErr('upload_failed','Upload fail ho gaya — dobara try karein');
  const data=await res.json();
  return { url:data.secure_url, bytes:data.bytes||0, publicId:data.public_id };
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
  watchCurrentToken(doctorId,date,cb){ const S=FB.S; return S.onSnapshot(S.doc(FB.db,'doctors',doctorId,'counters',date), snap=>{ cb(snap.exists()?(snap.data().currentToken||null):null); }, e=>console.warn('token watch',e)); },
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
    const isImg=/^image\//.test(file.type), MAXB=2*1024*1024;
    if(isImg&&file.size<400*1024) { const dataUrl=await fileToDataUrl(file,1400,0.85); return {dataUrl,mimeType:'image/jpeg',size:file.size}; }
    if(isImg){
      const dataUrl=await compressImageDataUrl(file,MAXB);
      const up=await uploadToCloudinary(dataUrl, (hint&&hint.doctorId?hint.doctorId+'_':'')+file.name);
      return {dataUrl:up.url, mimeType:'image/jpeg', size:up.bytes||file.size};
    }
    if(file.size>MAXB) throw appErr('file_too_big','File 2 MB se badi hai — kripya compress karke dobara upload karein');
    const up=await uploadToCloudinary(file, (hint&&hint.doctorId?hint.doctorId+'_':'')+file.name);
    return {dataUrl:up.url, mimeType:file.type, size:up.bytes||file.size};
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
/* Speaks a Hindi announcement out loud and buzzes the phone — used to alert a patient
   waiting on their own appointment page when the doctor calls/recalls someone. Both are
   best-effort: many browsers block one or the other, so failures are swallowed silently. */
function speakHi(text){ try{ if(!('speechSynthesis' in window)) return; const u=new SpeechSynthesisUtterance(text); u.lang='hi-IN'; u.rate=0.95; speechSynthesis.cancel(); speechSynthesis.speak(u); }catch(e){} }
function buzz(pattern){ try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){} }
let tokenWatchUnsub=null;
function stopTokenWatch(){ if(tokenWatchUnsub){ try{ tokenWatchUnsub(); }catch(e){} tokenWatchUnsub=null; } }
function startTokenWatch(doctorId,date,myToken){
  stopTokenWatch();
  tokenWatchUnsub=Backend.watchCurrentToken(doctorId,date,function(cur){
    if(!ui.route||ui.route.type!=='appt') return;
    ui.route.currentToken=cur;
    const wrap=document.getElementById('running-token-wrap'), val=document.getElementById('running-token-val');
    if(wrap&&val){ if(cur){ val.textContent=tokenLabel(cur); wrap.style.display=''; } else wrap.style.display='none'; }
    if(cur==null||!myToken) return;
    if(cur===myToken && !ui.route._announcedTurn){
      ui.route._announcedTurn=true;
      speakHi('Aapki baari aa gayi hai. Kripya andar aayein.'); buzz([300,100,300]); toast('Aapki baari aa gayi hai!');
    } else if(myToken-cur===3 && !ui.route._announced3){
      ui.route._announced3=true;
      speakHi('Dhyan dein. Aapka number teen token baad aane wala hai. Kripya waiting area mein pahuch jayein.'); buzz([200]);
      toast('3 token baad aapki baari — waiting area mein pahunch jayein');
    }
  });
}
async function enterRoute(){
  const seq=++routeSeq; parseRoute(); const r=ui.route; ui.previewMode=false; ui.booking={date:null,time:null}; ui.selectedPatientPhone=null; stopTokenWatch();
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
        if(r.appt&&r.appt.date===todayStr()){ try{ r.currentToken=await Backend.getCurrentToken(d.id,r.appt.date); }catch(e){ r.currentToken=null; } r._announcedTurn=false; r._announced3=false; startTokenWatch(d.id,r.appt.date,r.appt.tokenNo); } }
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
    <div class="field"><label>Confirm password</label><input type="password" id="fc-2" autocomplete="new-password"></div>
    <button class="btn btn-coral btn-block" id="fc-go">Save password</button><button class="login-back" id="fc-out">Logout</button></div></div>`;
  $('fc-out').onclick=doLogout;
  $('fc-go').onclick=async()=>{ const a=$('fc-1').value, b=$('fc-2').value; if(a.length<8){ toast('Password kam se kam 8 characters ka ho'); return; } if(a!==b){ toast('Dono password same hone chahiye'); return; }
    try{ await Backend.changePassword(null,a); session.mustChange=false; if(DemoBackend&&!FIREBASE_MODE) sessionStorage.setItem(DEMO_SESS,JSON.stringify(session)); toast('Password updated'); renderAdmin(); }catch(e){ toast(errMsg(e)); } };
}
function renderSuperadminLogin(){
  const root=$('root'), setup=!FIREBASE_MODE && !DemoBackend.hasSuperadmin();
  root.innerHTML=`<div class="login-wrap"><div class="login-card"><div class="login-mark">${ICONS.shield}</div><h2>${setup?'Create SuperAdmin (demo)':'SuperAdmin Login'}</h2>
    <div class="sub">${setup?'Demo mode: pehli baar apna SuperAdmin email + password banayein. Live mode mein ye Firebase Authentication se hota hai.':'Platform management ke liye login karein'}</div>
    <div class="field"><label>Email</label><input id="sa-email" type="email" autocomplete="username"></div>
    <div class="field"><label>Password${setup?' (min 8 characters)':''}</label><input type="password" id="sa-pass" autocomplete="${setup?'new-password':'current-password'}"></div>
    <button class="btn btn-coral btn-block" id="sa-submit">${ICONS.lock} ${setup?'Create & Login':'Login'}</button>
    ${setup?'':`<button class="login-back" id="sa-forgot" style="margin-top:12px;">Password bhool gaye?</button>`}
    <button class="login-back" id="sa-back2">← Home</button></div></div>`;
  const submit=async()=>{ const em=$('sa-email').value.trim(), pw=$('sa-pass').value; if(!em||!pw){ toast('Email aur password daalein'); return; }
    try{
      if(setup){ if(pw.length<8){ toast('Password kam se kam 8 characters ka ho'); return; } await DemoBackend.setupSuperadmin(em,pw); }
      else { const s=await Backend.signInStaff(em,pw); if(s.role!=='superadmin'){ await Backend.signOut(); toast('Ye account SuperAdmin nahi hai'); return; } }
      ui.saTab='dashboard'; enterRoute();
    }catch(e){ toast(errMsg(e)); } };
  $('sa-submit').onclick=submit; $('sa-pass').addEventListener('keydown',e=>{ if(e.key==='Enter') submit(); });
  $('sa-back2').onclick=()=>{ location.hash=''; }; const f=$('sa-forgot'); if(f) f.onclick=openResetModal;
}

/* ================= PUBLIC WEBSITE (home page) =================
   Content is edited by the SuperAdmin under  Website  tab and stored in platform/public.site  */
const SITE_DEFAULT = { phone:'8839913233', whatsapp:'', email:'amitshrivastava121988@gmail.com', address:'', hours:'', heroImage:'', appImage:'', photoIds:[] };
function siteCfg(){ const s=(state.platform&&state.platform.public&&state.platform.public.site)||{}; return Object.assign({},SITE_DEFAULT,s,{photoIds:Array.isArray(s.photoIds)?s.photoIds:[]}); }
function safeImg(u){ return (typeof u==='string' && /^data:image\/(jpeg|png|webp|gif);base64,[A-Za-z0-9+\/=]+$/.test(u)) ? u : ''; }
function siteDigits(p){ return String(p||'').replace(/[^\d]/g,''); }
function siteWaLink(p,msg){ let d=siteDigits(p); if(d.length===10) d='91'+d; return d?('https://wa.me/'+d+(msg?'?text='+encodeURIComponent(msg):'')):''; }
const SITE_IC = {
  cal:'<rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M8 2.5v4M16 2.5v4M3 9.5h18M9 15l2 2 4-4"/>',
  ticket:'<path d="M3 9V6a1 1 0 011-1h16a1 1 0 011 1v3a3 3 0 000 6v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a3 3 0 000-6z"/><path d="M14 6v12" stroke-dasharray="2 2.4"/>',
  live:'<circle cx="12" cy="12" r="3"/><path d="M6.3 6.3a8 8 0 000 11.4M17.7 6.3a8 8 0 010 11.4M3.5 3.5a12 12 0 000 17M20.5 3.5a12 12 0 010 17"/>',
  refresh:'<path d="M20 11a8 8 0 10-2.3 5.7"/><path d="M20 4v7h-7"/>',
  rupee:'<path d="M6 5h12M6 9.5h12M9 5c5.2 0 7 2.2 7 4.5S14 14 9 14H8l8 6"/>',
  qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h3M21 17v4h-4"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5M16 4.8a3.5 3.5 0 010 6.4M18 14.8c2 .6 3.3 2.3 3.6 5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart:'<path d="M4 20V11M10 20V4M16 20v-6M2 20h20"/>',
  file:'<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  chat:'<path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-3.7-.9z"/><path d="M9.2 9c0 3 2.8 5.8 5.8 5.8l1-1.6-2-1-1 .8a4 4 0 01-2.2-2.2l.8-1-1-2z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  tick:'<path d="M5 12.5l4.5 4.5L19 7.5"/>'
};
function sic(n,sz){ return `<svg class="st-ic" width="${sz||22}" height="${sz||22}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SITE_IC[n]||''}</svg>`; }
const SITE_HERO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Doctor with appointment calendar"><defs><linearGradient id="hsBg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#062f2c"/><stop offset=".55" stop-color="#0f6b63"/><stop offset="1" stop-color="#f6a04d"/></linearGradient><linearGradient id="hsCoat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfeceb"/></linearGradient><linearGradient id="hsSun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe2b0"/><stop offset="1" stop-color="#ffb35c"/></linearGradient></defs><rect width="600" height="500" fill="url(#hsBg)"/><circle cx="470" cy="118" r="82" fill="url(#hsSun)" opacity=".85"/><circle cx="470" cy="118" r="122" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="2"/><circle cx="470" cy="118" r="164" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="2"/><path d="M0 392 C70 350 130 372 200 348 C270 324 330 356 400 340 C470 324 540 344 600 322 V500 H0Z" fill="#062f2c" opacity=".55"/><path d="M0 430 C90 400 170 424 260 404 C350 384 450 420 600 392 V500 H0Z" fill="#041f1d" opacity=".6"/><!-- doctor --><g transform="translate(-6 8)"><path d="M150 500 C146 420 196 384 300 374 C404 384 454 420 450 500Z" fill="url(#hsCoat)"/><path d="M300 374 L246 392 L262 470 L300 420Z" fill="#eef6f5"/><path d="M300 374 L354 392 L338 470 L300 420Z" fill="#eef6f5"/><path d="M266 384 L300 480 L334 384 L300 372Z" fill="#0f766e"/><path d="M300 374 L246 392" stroke="#c4d9d6" stroke-width="2" fill="none"/><path d="M300 374 L354 392" stroke="#c4d9d6" stroke-width="2" fill="none"/><rect x="352" y="428" width="46" height="26" rx="6" fill="#fff" stroke="#c4d9d6"/><rect x="358" y="436" width="22" height="4" rx="2" fill="#0f766e"/><rect x="358" y="444" width="30" height="3" rx="1.5" fill="#f97316"/><path d="M276 338 h48 v40 q-24 22 -48 0z" fill="#dca07a"/><ellipse cx="238" cy="290" rx="9" ry="16" fill="#e8b08b"/><ellipse cx="362" cy="290" rx="9" ry="16" fill="#e8b08b"/><ellipse cx="300" cy="286" rx="62" ry="74" fill="#efb992"/><path d="M236 282 C228 214 274 196 306 198 C346 200 372 232 364 282 C352 250 332 238 300 238 C268 238 246 252 236 282Z" fill="#2a2a35"/><path d="M262 322 C272 352 328 352 338 322 C332 340 318 348 300 348 C282 348 268 340 262 322Z" fill="#3a3a46" opacity=".9"/><rect x="258" y="279" width="36" height="28" rx="11" fill="#fff" fill-opacity=".18" stroke="#2a2a35" stroke-width="4"/><rect x="306" y="279" width="36" height="28" rx="11" fill="#fff" fill-opacity=".18" stroke="#2a2a35" stroke-width="4"/><path d="M294 291 h12" stroke="#2a2a35" stroke-width="4"/><circle cx="276" cy="294" r="3.4" fill="#2a2a35"/><circle cx="324" cy="294" r="3.4" fill="#2a2a35"/><path d="M280 326 q20 14 40 0" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M258 384 C232 430 240 486 288 486" stroke="#1f2937" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M342 384 C368 430 360 486 312 486" stroke="#1f2937" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="300" cy="490" r="13" fill="#cbd5e1" stroke="#1f2937" stroke-width="5"/><circle cx="258" cy="382" r="6" fill="#1f2937"/><circle cx="342" cy="382" r="6" fill="#1f2937"/></g><!-- calendar card --><g transform="translate(34 78) rotate(-6 70 64)"><rect width="150" height="132" rx="20" fill="#fff" filter="url(#none)"/><rect width="150" height="34" rx="20" fill="#f97316"/><rect y="20" width="150" height="14" fill="#f97316"/><rect x="34" y="-8" width="10" height="24" rx="5" fill="#0a3f3b"/><rect x="106" y="-8" width="10" height="24" rx="5" fill="#0a3f3b"/><g fill="#cfe3e0"><rect x="18" y="50" width="26" height="22" rx="6"/><rect x="62" y="50" width="26" height="22" rx="6"/><rect x="106" y="50" width="26" height="22" rx="6"/><rect x="18" y="82" width="26" height="22" rx="6"/><rect x="62" y="82" width="26" height="22" rx="6"/></g><rect x="106" y="82" width="26" height="22" rx="6" fill="#16a34a"/><path d="M112 93 l6 6 l10 -11" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><!-- heartbeat card --><g transform="translate(408 250) rotate(4 70 40)"><rect width="164" height="86" rx="20" fill="#fff"/><circle cx="30" cy="30" r="15" fill="#e0f0ee"/><path d="M30 39 C20 32 21 24 27 24 C29 24 30 25.5 30 26.5 C30 25.5 31 24 33 24 C39 24 40 32 30 39Z" fill="#0f766e"/><rect x="54" y="20" width="58" height="8" rx="4" fill="#0c2a27"/><rect x="54" y="35" width="40" height="6" rx="3" fill="#9db8b4"/><path d="M14 66 H50 L58 50 L68 76 L78 58 L84 66 H150" stroke="#f97316" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><!-- token chip --><g transform="translate(58 374)"><rect width="176" height="52" rx="26" fill="#fff"/><circle cx="28" cy="26" r="15" fill="#16a34a"/><path d="M21 26 l5 5 l9 -10" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="52" y="14" width="86" height="9" rx="4.5" fill="#0c2a27"/><rect x="52" y="30" width="60" height="7" rx="3.5" fill="#9db8b4"/><rect x="132" y="12" width="34" height="28" rx="14" fill="#f97316"/><rect x="141" y="23" width="16" height="6" rx="3" fill="#fff"/></g></svg>`;
const SITE_PHONE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 480" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Booking screen preview"><defs><linearGradient id="phBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f6b63"/><stop offset="1" stop-color="#062f2c"/></linearGradient></defs><rect width="520" height="480" fill="url(#phBg)"/><circle cx="450" cy="70" r="120" fill="#f97316" opacity=".18"/><circle cx="60" cy="430" r="110" fill="#fff" opacity=".07"/><g transform="translate(150 30)"><rect width="220" height="440" rx="34" fill="#0b1d1b"/><rect x="8" y="8" width="204" height="424" rx="27" fill="#f4faf9"/><rect x="8" y="8" width="204" height="86" rx="27" fill="#0a3f3b"/><rect x="8" y="60" width="204" height="34" fill="#0a3f3b"/><circle cx="42" cy="50" r="16" fill="#f97316"/><text x="42" y="56" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="15" font-weight="700" fill="#fff">DR</text><rect x="68" y="38" width="90" height="9" rx="4.5" fill="#fff"/><rect x="68" y="54" width="62" height="7" rx="3.5" fill="#8fc2bc"/><rect x="24" y="110" width="80" height="8" rx="4" fill="#0a3f3b" opacity=".7"/><g><g fill="#dcebe8"><rect x="24" y="130" width="52" height="34" rx="10"/><rect x="84" y="130" width="52" height="34" rx="10"/><rect x="144" y="130" width="52" height="34" rx="10"/><rect x="24" y="172" width="52" height="34" rx="10"/><rect x="84" y="172" width="52" height="34" rx="10"/></g><rect x="144" y="172" width="52" height="34" rx="10" fill="#fff" stroke="#f97316" stroke-width="2.5"/><g fill="#fff" stroke="#cfe3e0" stroke-width="1.5"><rect x="24" y="214" width="52" height="34" rx="10"/><rect x="84" y="214" width="52" height="34" rx="10"/><rect x="144" y="214" width="52" height="34" rx="10"/><rect x="24" y="256" width="52" height="34" rx="10"/><rect x="84" y="256" width="52" height="34" rx="10"/><rect x="144" y="256" width="52" height="34" rx="10"/></g><g font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0c2a27"><text x="50" y="152" fill="#8aa5a1">#01</text><text x="110" y="152" fill="#8aa5a1">#02</text><text x="170" y="152" fill="#8aa5a1">#03</text><text x="50" y="194" fill="#8aa5a1">#04</text><text x="110" y="194" fill="#8aa5a1">#05</text><text x="170" y="194" fill="#ea580c">#06</text><text x="50" y="236">#07</text><text x="110" y="236">#08</text><text x="170" y="236">#09</text><text x="50" y="278">#10</text><text x="110" y="278">#11</text><text x="170" y="278">#12</text></g></g><rect x="24" y="330" width="172" height="44" rx="22" fill="#f97316"/><text x="110" y="358" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13.5" font-weight="700" fill="#fff">Book Appointment</text><text x="110" y="398" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="11" fill="#5b7370">Pay at the clinic</text></g><g transform="translate(46 96) rotate(-5)"><rect width="128" height="58" rx="16" fill="#fff"/><circle cx="30" cy="29" r="15" fill="#16a34a"/><path d="M23 29 l5 5 l9 -10" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="54" y="17" width="58" height="9" rx="4.5" fill="#0c2a27"/><rect x="54" y="33" width="40" height="7" rx="3.5" fill="#9db8b4"/></g><g transform="translate(360 300) rotate(5)"><rect width="122" height="70" rx="16" fill="#fff"/><circle cx="61" cy="35" r="22" fill="#e0f0ee"/><text x="61" y="42" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="20" font-weight="800" fill="#0f6b63">#4</text></g></svg>`;

const SITE_CSS = `
#site{--bg:#f2f8f7;--surface:#fff;--soft:#e4f1ef;--ink:#0c2a27;--mute:#587370;--line:#d5e5e2;--acc:#0f6b63;--teal-d:#083f3a;--teal-dd:#052c29;--or:#f97316;--or-d:#e8640a;--amber:#ffa24c;--nav:rgba(255,255,255,.92);
  background:var(--bg);color:var(--ink);font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;line-height:1.55;min-height:100vh;-webkit-font-smoothing:antialiased;text-align:left;}
html[data-theme="dark"] #site{--bg:#0a1413;--surface:#111f1e;--soft:#152826;--ink:#e7f2f0;--mute:#93aca8;--line:#213735;--acc:#3fc6b8;--nav:rgba(10,20,19,.92);}
#site *,#site *::before,#site *::after{box-sizing:border-box;}
#site h1,#site h2,#site h3,#site p,#site ul{margin:0;padding:0;}
#site ul{list-style:none;}
#site button,#site input,#site select,#site summary{font-family:inherit;}
#site .st-wrap{max-width:1140px;margin:0 auto;padding:0 20px;}
#site .st-ic{flex:none;display:block;}
#site .st-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:999px;padding:12px 22px;font-size:15px;font-weight:700;line-height:1.2;cursor:pointer;text-decoration:none;transition:transform .15s,background .15s,box-shadow .15s;white-space:nowrap;}
#site .st-btn:active{transform:translateY(1px);}
#site .st-btn:focus-visible,#site .st-icon-btn:focus-visible,#site summary:focus-visible,#site select:focus-visible,#site input:focus-visible{outline:3px solid var(--amber);outline-offset:2px;}
#site .st-btn-or{background:var(--or);color:#fff;box-shadow:0 8px 20px rgba(249,115,22,.32);}
#site .st-btn-or:hover{background:var(--or-d);}
#site .st-btn-line{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.55);padding:10px 20px;}
#site .st-btn-line:hover{background:rgba(255,255,255,.12);}
#site .st-btn-ghost{background:var(--soft);color:var(--acc);}
#site .st-btn-ghost:hover{filter:brightness(.97);}
#site .st-btn-white{background:#fff;color:#c2410c;}
#site .st-btn-sm{padding:9px 16px;font-size:14px;}
#site .st-btn-block{width:100%;}
#site .st-icon-btn{flex:none;width:44px;height:44px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--acc);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;}
#site .st-icon-btn svg{width:20px;height:20px;}
/* nav */
#site .st-nav{position:sticky;top:0;z-index:30;background:var(--nav);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line);}
#site .st-nav-in{display:flex;align-items:center;gap:10px;height:64px;}
#site .st-brand{display:flex;align-items:center;gap:9px;font-weight:800;font-size:18px;white-space:nowrap;letter-spacing:-.01em;color:var(--ink);text-decoration:none;}
#site .st-brand img,#site .st-fallback{width:38px;height:38px;border-radius:11px;background:#fff;object-fit:cover;box-shadow:0 0 0 1px var(--line);}
#site .st-fallback{display:inline-flex;align-items:center;justify-content:center;background:var(--or);color:#fff;font-weight:800;}
#site .st-links{display:none;margin-left:auto;gap:4px;}
#site .st-links button{border:0;background:none;color:var(--mute);font-size:15px;font-weight:600;padding:8px 12px;border-radius:10px;cursor:pointer;}
#site .st-links button:hover{color:var(--ink);background:var(--soft);}
#site .st-nav-cta{margin-left:auto;display:flex;align-items:center;gap:8px;}
#site .st-lang-toggle{display:flex;align-items:center;gap:6px;background:none;border:0;cursor:pointer;padding:4px 2px;font-family:inherit;}
#site .st-lang-opt{font-size:12px;font-weight:700;letter-spacing:.02em;color:var(--ink-3,#7d9490);transition:color .18s;}
#site .st-lang-opt.is-on{color:var(--teal-d,#0f6b63);}
#site .st-lang-track{position:relative;width:34px;height:19px;border-radius:999px;background:var(--teal-d,#0f6b63);flex:none;}
#site .st-lang-knob{position:absolute;top:2px;left:2px;width:15px;height:15px;border-radius:50%;background:#fff;transition:transform .18s ease;box-shadow:0 1px 2px rgba(0,0,0,.25);}
#site .st-lang-toggle[aria-checked="true"] .st-lang-knob{transform:translateX(15px);}
#site .st-nav-cta .st-btn{padding:9px 14px;font-size:13.5px;}
#site .st-nav-cta .st-btn svg{display:none;}
#site .st-burger{width:40px;height:40px;}
@media(min-width:480px){#site .st-nav-cta .st-btn svg{display:block;}#site .st-nav-cta .st-btn{padding:9px 16px;font-size:14px;}}
#site .st-burger{border:1px solid var(--line);background:var(--surface);color:var(--ink);width:42px;height:42px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;}
#site .st-menu{display:none;border-top:1px solid var(--line);background:var(--surface);}
#site .st-menu.open{display:block;}
#site .st-menu button{display:block;width:100%;text-align:left;border:0;background:none;color:var(--ink);font-size:16px;font-weight:600;padding:14px 20px;border-bottom:1px solid var(--line);cursor:pointer;}
@media(min-width:860px){#site .st-links{display:flex;}#site .st-nav-cta{margin-left:8px;}#site .st-burger{display:none;}#site .st-menu{display:none!important;}}
/* hero */
#site .st-hero{background:linear-gradient(115deg,var(--teal-dd) 0%,var(--teal-d) 48%,#0e6a62 100%);color:#fff;position:relative;overflow:hidden;}
#site .st-hero::after{content:"";position:absolute;right:-120px;top:-140px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.30),rgba(249,115,22,0) 65%);pointer-events:none;}
#site .st-hero-in{position:relative;z-index:1;display:grid;gap:28px;padding-top:32px;padding-bottom:44px;align-items:center;}
#site .st-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);padding:6px 13px;border-radius:999px;font-size:13px;font-weight:600;}
#site .st-pill i{width:8px;height:8px;border-radius:50%;background:#4ade80;display:block;}
#site .st-h1{font-size:clamp(34px,7.4vw,52px);line-height:1.04;font-weight:800;letter-spacing:-.025em;margin:16px 0 14px;}
#site .st-h1 span{display:block;color:var(--amber);}
#site .st-lead{font-size:clamp(16px,2.4vw,18px);max-width:520px;color:rgba(255,255,255,.86);}
#site .st-hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;}
#site .st-hero-pts{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:22px;font-size:14px;color:rgba(255,255,255,.82);}
#site .st-hero-pts span{display:inline-flex;align-items:center;gap:7px;}
#site .st-hero-pts svg{color:#4ade80;}
#site .st-hero-img{border-radius:28px;overflow:hidden;box-shadow:0 28px 60px rgba(0,0,0,.38);aspect-ratio:6/5;background:#0e6a62;border:1px solid rgba(255,255,255,.14);}
#site .st-hero-img img,#site .st-hero-img svg{width:100%;height:100%;object-fit:cover;display:block;}
@media(min-width:860px){#site .st-hero-in{grid-template-columns:1.1fr .9fr;gap:48px;padding-top:56px;padding-bottom:72px;}}
/* strip */
#site .st-strip{background:var(--or);color:#fff;}
#site .st-strip-in{display:flex;flex-wrap:wrap;align-items:center;gap:12px 32px;padding:16px 20px;}
#site .st-strip-help{display:flex;align-items:center;gap:12px;font-weight:700;font-size:17px;}
#site .st-strip-help small{display:block;font-weight:500;font-size:13px;opacity:.9;}
#site .st-strip-help a{color:#fff;text-decoration:none;}
#site .st-strip-help .st-ring{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;}
#site .st-strip-pts{display:none;flex-wrap:wrap;gap:8px 24px;font-size:14px;font-weight:600;}
#site .st-strip-pts span{display:inline-flex;align-items:center;gap:8px;}
@media(min-width:860px){#site .st-strip-pts{display:flex;margin-left:auto;}}
/* sections */
#site .st-sec{padding:56px 0;scroll-margin-top:64px;}
#site .st-sec-alt{background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
#site .st-title{font-size:clamp(26px,4.6vw,36px);line-height:1.12;font-weight:800;letter-spacing:-.02em;}
#site .st-sub{color:var(--mute);margin-top:10px;max-width:560px;font-size:16px;}
#site .st-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:26px;}
/* features */
#site .st-feat{display:grid;gap:14px;grid-template-columns:1fr;}
@media(min-width:560px){#site .st-feat{grid-template-columns:repeat(2,1fr);}}
@media(min-width:960px){#site .st-feat{grid-template-columns:repeat(5,1fr);}}
#site .st-fcard{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:16px 18px;display:grid;grid-template-columns:48px 1fr;column-gap:14px;align-items:start;}
@media(min-width:560px){#site .st-fcard{display:block;padding:20px;}}
#site .st-sec-alt .st-fcard{background:var(--bg);}
#site .st-fic{width:48px;height:48px;border-radius:14px;background:var(--soft);color:var(--acc);display:flex;align-items:center;justify-content:center;grid-row:span 2;}
@media(min-width:560px){#site .st-fic{margin-bottom:14px;}}
#site .st-fcard:nth-child(even) .st-fic{background:rgba(249,115,22,.13);color:var(--or-d);}
#site .st-fcard h3{font-size:16.5px;font-weight:700;margin-bottom:6px;}
#site .st-fcard p{font-size:14.5px;color:var(--mute);}
/* doctors */
#site .st-docs-wrap{display:grid;gap:22px;}
#site .st-book{order:-1;}
@media(min-width:960px){#site .st-book{order:0;}}
@media(min-width:960px){#site .st-docs-wrap{grid-template-columns:1fr 340px;align-items:start;}}
#site .st-search{position:relative;flex:1;min-width:220px;max-width:340px;}
#site .st-search svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--mute);}
#site .st-search input{width:100%;height:46px;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);padding:0 14px 0 42px;font-size:15px;}
#site .st-dgrid{display:grid;gap:16px;grid-template-columns:1fr;}
@media(min-width:600px){#site .st-dgrid{grid-template-columns:repeat(2,1fr);}#site .st-dph{aspect-ratio:16/11;}#site .st-dini{width:96px;height:96px;font-size:34px;}}
#site .st-dcard{background:var(--surface);border:1px solid var(--line);border-radius:22px;overflow:hidden;display:flex;flex-direction:column;}
#site .st-dcard[hidden]{display:none;}
#site .st-dph{aspect-ratio:16/9;position:relative;background:var(--soft);display:flex;align-items:center;justify-content:center;overflow:hidden;}
#site .st-dph img{width:100%;height:100%;object-fit:cover;object-position:center 22%;display:block;}
#site .st-dini{width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;font-weight:800;letter-spacing:.02em;box-shadow:0 10px 24px rgba(0,0,0,.16);}
#site .st-fee{position:absolute;right:12px;top:12px;background:var(--surface);color:var(--ink);font-weight:800;font-size:14px;padding:5px 12px;border-radius:999px;box-shadow:0 2px 10px rgba(0,0,0,.14);}
#site .st-dbody{padding:16px 18px 18px;display:flex;flex-direction:column;gap:4px;flex:1;}
#site .st-dname{font-size:19px;font-weight:800;letter-spacing:-.01em;}
#site .st-dspec{color:var(--acc);font-weight:600;font-size:15px;}
#site .st-dmeta{color:var(--mute);font-size:14px;}
#site .st-drate{font-size:14px;color:var(--mute);}
#site .st-dact{display:flex;gap:10px;margin-top:auto;padding-top:14px;}
#site .st-dact .st-btn{flex:1;}
#site .st-empty{grid-column:1/-1;border:1px dashed var(--line);border-radius:20px;padding:34px 20px;text-align:center;color:var(--mute);}
#site .st-book{background:var(--teal-d);color:#fff;border-radius:24px;padding:24px;box-shadow:0 20px 44px rgba(5,44,41,.28);}
@media(min-width:960px){#site .st-book{position:sticky;top:84px;}}
#site .st-book h3{font-size:22px;font-weight:800;letter-spacing:-.01em;}
#site .st-book p{color:rgba(255,255,255,.75);font-size:14.5px;margin:6px 0 16px;}
#site .st-book select{width:100%;height:48px;border-radius:14px;border:1px solid rgba(255,255,255,.22);background:#fff;color:#0c2a27;padding:0 12px;font-size:15px;margin-bottom:12px;}
#site .st-book .st-btn+.st-btn{margin-top:10px;}
#site .st-book .st-btn-line{border-color:rgba(255,255,255,.4);}
/* for doctors band */
#site .st-band{display:grid;gap:30px;align-items:center;}
@media(min-width:860px){#site .st-band{grid-template-columns:.9fr 1.1fr;gap:56px;}}
#site .st-band-img{border-radius:28px;overflow:hidden;aspect-ratio:13/12;box-shadow:0 22px 50px rgba(5,44,41,.25);background:var(--teal-d);}
#site .st-band-img img,#site .st-band-img svg{width:100%;height:100%;object-fit:cover;display:block;}
#site .st-blist{display:grid;gap:14px;margin:22px 0 26px;}
#site .st-blist li{display:flex;gap:14px;align-items:flex-start;}
#site .st-blist .st-fic{margin:0;width:44px;height:44px;flex:none;}
#site .st-blist b{display:block;font-size:16px;}
#site .st-blist span{color:var(--mute);font-size:14.5px;}
#site .st-band-cta{display:flex;flex-wrap:wrap;gap:12px;}
/* steps */
#site .st-steps{display:grid;gap:16px;counter-reset:s;}
@media(min-width:760px){#site .st-steps{grid-template-columns:repeat(3,1fr);gap:22px;}}
#site .st-step{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:22px 22px 22px 22px;counter-increment:s;}
#site .st-step::before{content:counter(s);display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:var(--or);color:#fff;font-weight:800;margin-bottom:14px;}
#site .st-step h3{font-size:18px;font-weight:700;margin-bottom:6px;}
#site .st-step p{color:var(--mute);font-size:15px;}
/* faq */
#site .st-faq{max-width:780px;display:grid;gap:10px;}
#site .st-faq details{background:var(--surface);border:1px solid var(--line);border-radius:16px;}
#site .st-sec-alt .st-faq details{background:var(--bg);}
#site .st-faq summary{cursor:pointer;list-style:none;padding:16px 18px;font-weight:700;font-size:16px;display:flex;justify-content:space-between;gap:12px;align-items:center;}
#site .st-faq summary::-webkit-details-marker{display:none;}
#site .st-faq summary::after{content:"+";font-size:24px;line-height:1;color:var(--or-d);font-weight:500;flex:none;}
#site .st-faq details[open] summary::after{content:"\\2212";}
#site .st-faq details p{padding:0 18px 18px;color:var(--mute);font-size:15px;}
/* contact */
#site .st-contact{display:grid;gap:18px;}
@media(min-width:860px){#site .st-contact{grid-template-columns:1.15fr .85fr;}}
#site .st-ccard{background:linear-gradient(135deg,#f97316,#e8640a);color:#fff;border-radius:26px;padding:28px;}
#site .st-ccard h3,#site .st-tcard h3{font-size:24px;font-weight:800;letter-spacing:-.01em;margin-bottom:6px;}
#site .st-ccard>p{opacity:.92;margin-bottom:18px;}
#site .st-crow{display:flex;gap:14px;align-items:flex-start;padding:12px 0;border-top:1px solid rgba(255,255,255,.25);color:#fff;text-decoration:none;}
#site .st-crow .st-ring{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex:none;}
#site .st-crow small{display:block;opacity:.85;font-size:13px;}
#site .st-crow b{font-size:16px;font-weight:700;word-break:break-word;}
#site .st-ccard .st-btn{margin-top:16px;}
#site .st-tcard{background:var(--teal-d);color:#fff;border-radius:26px;padding:28px;display:flex;flex-direction:column;gap:12px;}
#site .st-tcard p{color:rgba(255,255,255,.8);white-space:pre-line;}
/* footer */
#site .st-foot{background:var(--teal-dd);color:#c4dcd8;padding:40px 0 30px;}
#site .st-foot-in{display:grid;gap:26px;}
@media(min-width:760px){#site .st-foot-in{grid-template-columns:1.4fr 1fr 1fr;}}
#site .st-foot .st-brand{color:#fff;}
#site .st-foot p{font-size:14.5px;margin-top:12px;max-width:340px;color:#a9c8c3;}
#site .st-foot h4{margin:0 0 10px;color:#fff;font-size:15px;}
#site .st-foot button.st-lnk{display:block;border:0;background:none;color:#c4dcd8;font-size:15px;padding:5px 0;cursor:pointer;text-align:left;}
#site .st-foot button.st-lnk:hover{color:#fff;}
#site .st-copy{margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.12);font-size:13px;color:#8fb2ad;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;}
@media(prefers-reduced-motion:reduce){#site *{transition:none!important;scroll-behavior:auto!important;}}
`;
function siteInjectCss(){ let el=document.getElementById('site-css'); if(!el){ el=document.createElement('style'); el.id='site-css'; document.head.appendChild(el); } if(el.textContent!==SITE_CSS) el.textContent=SITE_CSS; }

/* ---- Site (landing page) language toggle: English <-> Hinglish ---- */
function siteLang(){ try{ return localStorage.getItem('site_lang')==='hi'?'hi':'en'; }catch(e){ return 'en'; } }
function setSiteLang(l){ try{ localStorage.setItem('site_lang', l==='hi'?'hi':'en'); }catch(e){} }

const SITE_I18N = {
en:{
  toastPickDoctor:'Please select a doctor first',
  waMsg:brand=>'Hello, I would like to know more about '+brand+'.',
  pillBooking:n=>n+(n===1?' doctor':' doctors')+' currently taking bookings',
  pillDefault:'Online appointment booking',
  h1a:'Doctor appointments,', h1b:'now without the queue.',
  lead:'Choose your doctor\'s slot or token, without logging in. Your turn is ready the moment you reach the clinic.',
  ctaBook:'Book Appointment', ctaJoin:'Are you a doctor? Join us',
  ptNoLogin:'No login', ptLiveToken:'Live token', ptPayClinic:'Pay at the clinic',
  stripHelp:'Call us for help with booking', stripNeed:'Need help booking?', stripSee:'See the contact section below',
  stripPt1:'Choose a day or token', stripPt2:'See the running token', stripPt3:'Pay at the clinic',
  featTitle:'Everything made easy for patients', featSub:'Secure your place from home, instead of standing in line.',
  feats:[
    ['cal','Book without login','Just enter your name and mobile number to book an appointment. No account or password needed.'],
    ['ticket','Slot or token','Choose a time slot or token number, depending on the doctor.'],
    ['live','Live token','See which token is currently being served before you even reach the clinic.'],
    ['refresh','Change or cancel anytime','Easily change your day or slot using your Appointment ID and mobile number.'],
    ['rupee','Pay at the clinic','No online payment needed to book. Consultation fees are paid directly at the clinic.']
  ],
  docTitle:'Choose your doctor', docSub:'Tap a doctor\'s card to go straight to their booking page.',
  searchPh:'Search doctor or speciality',
  noDocs:'No doctor is currently available for booking. Please check back shortly.',
  noneFound:'No doctor found with that name.',
  quickBook:'Quick booking', quickSub:'Choose a doctor and go straight to their booking page.',
  selectDoctor:'Select doctor', checkAppt:'Check my appointment',
  fdTitle:'Are you a doctor? Get your own booking page', fdSub:'No more juggling bookings over the phone or at the clinic reception.',
  dfeat:[
    ['qr','Your own booking page & QR','Every doctor gets a personal link and QR poster — put it up on the clinic wall.'],
    ['users','Queue in one place','Current token, next patient, skip and recall — all on a single screen.'],
    ['clock','Your own schedule','You decide the days, times, breaks and holidays. Slots open up accordingly.'],
    ['chart','Patients and accounts','Patient records, payments and reports, all in one app.']
  ],
  contactUs:'Contact us',
  howTitle:'Booking in three steps',
  steps:[
    ['Choose a doctor','Open your doctor\'s card from the list above, or scan their link or QR code.'],
    ['Pick a day and slot','Available slots or tokens are shown; ones already booked appear locked.'],
    ['Enter your details','Enter your name and mobile number. You\'ll get an Appointment ID as soon as the booking is confirmed.']
  ],
  faqTitle:'Frequently asked questions',
  faqs:[
    ['Do I need to create an account to book?','No. Just choose a doctor, pick a slot or token, and enter your name and mobile number. The booking is confirmed instantly.'],
    ['How do I pay the fees?','No online payment is required to book. The doctor\'s consultation fee is paid at the clinic, as shown on the doctor\'s card.'],
    ['What if I need to change or cancel my appointment?','On the doctor\'s booking page, tap "Already booked? Check your appointment." Enter your Appointment ID (AD-XXXXXX) and mobile number to change or cancel it.'],
    ['I can\'t find my doctor here.','We build a separate booking page for each doctor. Ask your doctor to get in touch with us, or ask them for their booking link.'],
    ['How can a doctor get their own page?','Contact us using the details below. We\'ll set up the doctor\'s booking page, link and QR poster.'],
    ['Who can see my details?','Your booking details are only visible to the clinic of the doctor you booked with.']
  ],
  getInTouch:'Get in touch', getInTouchSub:'For questions about booking or doctor onboarding, we\'re here to help.',
  waButton:'Message on WhatsApp',
  forDoctors:'For doctors', ctaContactDoc:'Contact us to get your own booking page, or log in directly as a doctor.',
  footDesc:'Every doctor gets their own booking page. No login for patients, no hassle for doctors.',
  footCopy:'Made for clinics in India',
},
hi:{
  toastPickDoctor:'Pehle doctor chunein',
  waMsg:brand=>'Namaste, mujhe '+brand+' ke baare mein jaankari chahiye.',
  pillBooking:n=>n+(n===1?' doctor':' doctors')+' abhi booking le rahe hain',
  pillDefault:'Online appointment booking',
  h1a:'Doctor ki appointment,', h1b:'ab bina line ke.',
  lead:'Apne doctor ka slot ya token chunein, bina login ke. Clinic pahunchte hi aapki baari taiyar.',
  ctaBook:'Appointment book karein', ctaJoin:'Doctor hain? Judiye',
  ptNoLogin:'Bina login', ptLiveToken:'Live token', ptPayClinic:'Fees clinic par',
  stripHelp:'Booking mein madad ke liye call karein', stripNeed:'Booking mein madad chahiye?', stripSee:'Neeche contact section dekhein',
  stripPt1:'Din ya token chunein', stripPt2:'Running token dekhein', stripPt3:'Fees clinic par',
  featTitle:'Patients ke liye, sab kuch aasaan', featSub:'Line mein khade hone ki jagah, ghar se apna number pakka karein.',
  feats:[
    ['cal','Bina login booking','Sirf naam aur mobile number se appointment book karein. Koi account ya password nahi.'],
    ['ticket','Slot ya token','Doctor ke hisaab se apna time slot ya token number chunein.'],
    ['live','Live token','Clinic mein baithne se pehle dekhein ki abhi kaun sa token chal raha hai.'],
    ['refresh','Badlein ya cancel karein','Appointment ID aur mobile number se din ya slot badalna aasaan hai.'],
    ['rupee','Fees clinic par','Booking ke liye online payment nahi. Consultation ki fees clinic par di jaati hai.']
  ],
  docTitle:'Apna doctor chunein', docSub:'Doctor ka card dabakar seedha unka booking page kholein.',
  searchPh:'Doctor ya speciality dhundhein',
  noDocs:'Abhi koi doctor booking ke liye available nahi hai. Thodi der baad dobara dekhein.',
  noneFound:'Is naam ka koi doctor nahi mila.',
  quickBook:'Jaldi book karein', quickSub:'Doctor chunein aur seedha booking page par jayein.',
  selectDoctor:'Doctor chunein', checkAppt:'Meri appointment dekhein',
  fdTitle:'Doctor hain? Apna booking page banwayein', fdSub:'Phone par ya clinic ke reception par booking sambhalne ka jhanjhat khatam.',
  dfeat:[
    ['qr','Apna booking page aur QR','Har doctor ka apna link aur QR poster. Clinic ki deewar par lagayein.'],
    ['users','Queue ek jagah','Current token, agla patient, skip aur recall, sab ek screen par.'],
    ['clock','Apna schedule','Din, time, break aur chhutti aap tay karein. Slot usi ke hisaab se khulte hain.'],
    ['chart','Patients aur hisaab','Patient records, payments aur reports ek hi app mein.']
  ],
  contactUs:'Hamse sampark karein',
  howTitle:'Booking teen kadam mein',
  steps:[
    ['Doctor chunein','Upar diye doctors mein se apne doctor ka card kholein, ya unka link ya QR scan karein.'],
    ['Din aur slot chunein','Khaali slot ya token dikhte hain. Jo book ho chuke, wo lock dikhte hain.'],
    ['Details bharein','Naam aur mobile number dalein. Booking confirm hote hi aapko appointment ID milti hai.']
  ],
  faqTitle:'Aksar poochhe jaane wale sawal',
  faqs:[
    ['Kya booking ke liye account banana padta hai?','Nahi. Doctor chunein, slot ya token chunein aur naam, mobile number bharein. Booking turant confirm ho jaati hai.'],
    ['Fees kaise dena hoga?','Booking ke liye online payment nahi karna padta. Doctor ki consultation fees clinic par di jaati hai, jo doctor ke card par likhi hoti hai.'],
    ['Appointment badalni ya cancel karni ho to?','Doctor ke booking page par "Already booked? Check your appointment" dabayein. Appointment ID (AD-XXXXXX) aur mobile number daalne par aap use badal ya cancel kar sakte hain.'],
    ['Mera doctor yahan nahi dikh raha.','Hum har doctor ka booking page alag se banate hain. Doctor se kahiye ki hamse sampark karein, ya unse unka booking link maang lein.'],
    ['Doctor apna page kaise banwayein?','Neeche diye gaye contact par sampark karein. Hum doctor ka booking page, link aur QR poster taiyar kar dete hain.'],
    ['Meri details kaun dekh sakta hai?','Aapki booking ki details sirf usi doctor ke clinic ke liye hoti hain jisse aapne appointment li hai.']
  ],
  getInTouch:'Sampark karein', getInTouchSub:'Booking ya doctor ke onboarding ke baare mein poochhna ho to hum yahan hain.',
  waButton:'WhatsApp par likhein',
  forDoctors:'Doctors ke liye', ctaContactDoc:'Apna booking page banwane ke liye hamse sampark karein ya seedha Doctor Login karein.',
  footDesc:'Har doctor ka apna booking page. Patient ke liye bina login, doctor ke liye bina jhanjhat.',
  footCopy:'Made for clinics in India',
}
};

function siteDoctorCard(d,s,t){
  const rt=docRatingStats(d.id), showPhoto=s.photoIds.includes(d.id)&&safeImg(d.photoDataUrl);
  const media=showPhoto?`<img src="${d.photoDataUrl}" alt="${d.name}" loading="lazy">`:`<div class="st-dini" style="background:${d.color||'#0f6b63'};">${initials(unesc(d.name))}</div>`;
  const meta=[d.exp?d.exp+' yrs experience':'', d.clinicName||''].filter(Boolean).join(' · ');
  return `<article class="st-dcard" data-q="${(unesc(d.name)+' '+(d.spec||'')+' '+unesc(d.clinicName||'')).toLowerCase().replace(/"/g,'')}">
    <div class="st-dph">${media}<span class="st-fee">₹${d.fee}</span></div>
    <div class="st-dbody"><div class="st-dname">${d.name}</div><div class="st-dspec">${d.spec||''}</div>
      ${meta?`<div class="st-dmeta">${meta}</div>`:''}${d.clinicAddress?`<div class="st-dmeta">${d.clinicAddress}</div>`:''}
      ${rt.count>0?`<div class="st-drate">${starsDisplay(rt.avg)} ${rt.avg} (${rt.count})</div>`:''}
      <div class="st-dact"><button class="st-btn st-btn-or st-btn-sm" data-book="${d.slug}">${t.ctaBook}</button><button class="st-icon-btn" data-copylink="${d.slug}" aria-label="Share ${d.name}'s booking link" title="Share link">${ICONS.share}</button></div></div></article>`;
}

function renderDirectory(){
  siteInjectCss();
  const root=$('root'), s=siteCfg(), brand=esc(APP_CONFIG.brand);
  const lang=siteLang(), t=SITE_I18N[lang];
  const docs=state.doctors.filter(d=>d.active!==false&&!d.deleted&&!bookingClosedReason(d,state.platform.public));
  const heroImg=safeImg(s.heroImage), appImg=safeImg(s.appImage);
  const tel=siteDigits(s.phone)?'tel:'+String(s.phone).replace(/[^\d+]/g,''):'', wa=siteWaLink(s.whatsapp||s.phone,t.waMsg(APP_CONFIG.brand));
  const hasContact=!!(s.phone||s.whatsapp||s.email||s.address||s.hours);
  const mapHref=s.address?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s.address):'';
  const feats=t.feats, dfeat=t.dfeat, faqs=t.faqs;
  const langBtn=`<button class="st-lang-toggle" id="st-lang" role="switch" aria-checked="${lang==='hi'}" aria-label="Switch language">
      <span class="st-lang-opt ${lang==='en'?'is-on':''}">EN</span><span class="st-lang-track"><span class="st-lang-knob"></span></span><span class="st-lang-opt ${lang==='hi'?'is-on':''}">हिं</span>
    </button>`;
  root.innerHTML=`<div id="site">
  <header class="st-nav"><div class="st-wrap st-nav-in">
    <a class="st-brand" href="#/" aria-label="${brand} home"><img src="logo-mark.png" alt="" width="38" height="38"><span>${brand}</span></a>
    <nav class="st-links" aria-label="Sections"><button data-go="st-features">Features</button><button data-go="st-doctors">Doctors</button><button data-go="st-how">How it works</button><button data-go="st-faq">FAQ</button>${hasContact?'<button data-go="st-contact">Contact</button>':''}</nav>
    <div class="st-nav-cta">${langBtn}<button class="st-btn st-btn-or st-btn-sm" data-login>${sic('lock',16)} Doctor Login</button><button class="st-burger" id="st-burger" aria-label="Menu" aria-expanded="false">${sic('menu',22)}</button></div></div>
    <div class="st-menu" id="st-menu"><button data-go="st-features">Features</button><button data-go="st-doctors">Doctors</button><button data-go="st-how">How it works</button><button data-go="st-faq">FAQ</button>${hasContact?'<button data-go="st-contact">Contact</button>':''}</div>
  </header>

  <section class="st-hero"><div class="st-wrap st-hero-in">
    <div><span class="st-pill"><i></i>${docs.length>0?t.pillBooking(docs.length):t.pillDefault}</span>
      <h1 class="st-h1">${t.h1a}<span>${t.h1b}</span></h1>
      <p class="st-lead">${t.lead}</p>
      <div class="st-hero-cta"><button class="st-btn st-btn-or" data-go="st-doctors">${t.ctaBook}</button><button class="st-btn st-btn-line" data-go="st-for-doctors">${t.ctaJoin}</button></div>
      <div class="st-hero-pts"><span>${sic('tick',18)}${t.ptNoLogin}</span><span>${sic('tick',18)}${t.ptLiveToken}</span><span>${sic('tick',18)}${t.ptPayClinic}</span></div></div>
    <div class="st-hero-img">${heroImg?`<img src="${heroImg}" alt="">`:SITE_HERO_SVG}</div>
  </div></section>

  <div class="st-strip"><div class="st-wrap st-strip-in">
    <div class="st-strip-help"><span class="st-ring">${sic('phone',22)}</span><div>${s.phone?`<a href="${tel}">${esc(s.phone)}</a><small>${t.stripHelp}</small>`:`${t.stripNeed}<small>${t.stripSee}</small>`}</div></div>
    <div class="st-strip-pts"><span>${sic('cal',18)}${t.stripPt1}</span><span>${sic('live',18)}${t.stripPt2}</span><span>${sic('rupee',18)}${t.stripPt3}</span></div>
  </div></div>

  <section class="st-sec" id="st-features"><div class="st-wrap">
    <div class="st-head"><div><h2 class="st-title">${t.featTitle}</h2><p class="st-sub">${t.featSub}</p></div></div>
    <div class="st-feat">${feats.map(f=>`<div class="st-fcard"><div class="st-fic">${sic(f[0],24)}</div><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('')}</div>
  </div></section>

  <section class="st-sec st-sec-alt" id="st-doctors"><div class="st-wrap">
    <div class="st-head"><div><h2 class="st-title">${t.docTitle}</h2><p class="st-sub">${t.docSub}</p></div>
      <label class="st-search">${sic('search',18)}<input type="search" id="st-q" placeholder="${t.searchPh}" aria-label="Search doctors"></label></div>
    <div class="st-docs-wrap">
      <div class="st-dgrid" id="st-dgrid">${docs.length?docs.map(d=>siteDoctorCard(d,s,t)).join(''):`<div class="st-empty">${t.noDocs}</div>`}<div class="st-empty" id="st-none" hidden>${t.noneFound}</div></div>
      <aside class="st-book"><h3>${t.quickBook}</h3><p>${t.quickSub}</p>
        <select id="st-sel" aria-label="Select doctor"><option value="">${t.selectDoctor}</option>${docs.map(d=>`<option value="${d.slug}">${d.name} · ${d.spec||''}</option>`).join('')}</select>
        <button class="st-btn st-btn-or st-btn-block" id="st-go">${t.ctaBook}</button>
        <button class="st-btn st-btn-line st-btn-block" id="st-check">${t.checkAppt}</button></aside>
    </div></div></section>

  <section class="st-sec" id="st-for-doctors"><div class="st-wrap st-band">
    <div class="st-band-img">${appImg?`<img src="${appImg}" alt="">`:SITE_PHONE_SVG}</div>
    <div><h2 class="st-title">${t.fdTitle}</h2><p class="st-sub">${t.fdSub}</p>
      <ul class="st-blist">${dfeat.map(f=>`<li><div class="st-fic">${sic(f[0],22)}</div><div><b>${f[1]}</b><span>${f[2]}</span></div></li>`).join('')}</ul>
      <div class="st-band-cta"><button class="st-btn st-btn-or" data-login>${sic('lock',16)} Doctor Login</button>${hasContact?`<button class="st-btn st-btn-ghost" data-go="st-contact">${t.contactUs}</button>`:''}</div></div>
  </div></section>

  <section class="st-sec st-sec-alt" id="st-how"><div class="st-wrap">
    <div class="st-head"><div><h2 class="st-title">${t.howTitle}</h2></div></div>
    <div class="st-steps">${t.steps.map(st=>`<div class="st-step"><h3>${st[0]}</h3><p>${st[1]}</p></div>`).join('')}</div></div></section>

  <section class="st-sec" id="st-faq"><div class="st-wrap">
    <div class="st-head"><div><h2 class="st-title">${t.faqTitle}</h2></div></div>
    <div class="st-faq">${faqs.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div>
  </div></section>

  ${hasContact?`<section class="st-sec st-sec-alt" id="st-contact"><div class="st-wrap"><div class="st-contact">
    <div class="st-ccard"><h3>${t.getInTouch}</h3><p>${t.getInTouchSub}</p>
      ${s.phone?`<a class="st-crow" href="${tel}"><span class="st-ring">${sic('phone',20)}</span><span><small>Phone</small><b>${esc(s.phone)}</b></span></a>`:''}
      ${wa&&s.whatsapp?`<a class="st-crow" href="${wa}" target="_blank" rel="noopener"><span class="st-ring">${sic('chat',20)}</span><span><small>WhatsApp</small><b>${esc(s.whatsapp)}</b></span></a>`:''}
      ${s.email?`<a class="st-crow" href="mailto:${esc(s.email)}"><span class="st-ring">${sic('mail',20)}</span><span><small>Email</small><b>${esc(s.email)}</b></span></a>`:''}
      ${s.address?`<a class="st-crow" href="${mapHref}" target="_blank" rel="noopener"><span class="st-ring">${sic('pin',20)}</span><span><small>Address</small><b>${esc(s.address)}</b></span></a>`:''}
      ${wa?`<a class="st-btn st-btn-white" href="${wa}" target="_blank" rel="noopener">${sic('chat',18)} ${t.waButton}</a>`:''}</div>
    <div class="st-tcard"><h3>${s.hours?'Support timing':t.forDoctors}</h3>${s.hours?`<p>${esc(s.hours)}</p>`:`<p>${t.ctaContactDoc}</p>`}<div><button class="st-btn st-btn-or" data-login>${sic('lock',16)} Doctor Login</button></div></div>
  </div></div></section>`:''}

  <footer class="st-foot"><div class="st-wrap"><div class="st-foot-in">
    <div><a class="st-brand" href="#/"><img src="logo-mark.png" alt="" width="38" height="38"><span>${brand}</span></a><p>${t.footDesc}</p></div>
    <div><h4>Explore</h4><button class="st-lnk" data-go="st-features">Features</button><button class="st-lnk" data-go="st-doctors">Doctors</button><button class="st-lnk" data-go="st-how">How it works</button><button class="st-lnk" data-go="st-faq">FAQ</button></div>
    <div><h4>Account</h4><button class="st-lnk" data-login>Doctor Login</button><button class="st-lnk" id="sa-link">Platform Admin</button></div>
  </div><div class="st-copy"><span>© ${new Date().getFullYear()} ${brand}</span><span>${t.footCopy}</span></div></div></footer>
  </div>`;

  const go=id=>{ const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}); };
  root.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{ const m=$('st-menu'); if(m){ m.classList.remove('open'); $('st-burger').setAttribute('aria-expanded','false'); } go(b.dataset.go); });
  root.querySelectorAll('[data-login]').forEach(b=>b.onclick=()=>{ location.hash='#/login'; });
  $('sa-link').onclick=()=>{ location.hash='#/superadmin'; };
  $('st-burger').onclick=()=>{ const m=$('st-menu'), o=m.classList.toggle('open'); $('st-burger').setAttribute('aria-expanded',o?'true':'false'); };
  $('st-lang').onclick=()=>{ setSiteLang(siteLang()==='en'?'hi':'en'); renderDirectory(); };
  root.querySelectorAll('[data-book]').forEach(b=>b.onclick=()=>{ location.hash='#/book/'+b.dataset.book; });
  root.querySelectorAll('[data-copylink]').forEach(b=>b.onclick=()=>{ const d=docBySlug(b.dataset.copylink); if(d) shareOrCopyLink(publicUrl(d.slug), unesc(d.name)+' — Book an Appointment', '#/book/'+d.slug); });
  $('st-go').onclick=()=>{ const v=$('st-sel').value; if(!v){ toast(t.toastPickDoctor); return; } location.hash='#/book/'+v; };
  $('st-check').onclick=()=>{ const v=$('st-sel').value; if(!v){ toast(t.toastPickDoctor); return; } location.hash='#/my/'+v; };
  $('st-q').oninput=e=>{ const q=e.target.value.trim().toLowerCase(); let n=0; root.querySelectorAll('.st-dcard').forEach(c=>{ const ok=!q||c.dataset.q.includes(q); c.hidden=!ok; if(ok) n++; }); $('st-none').hidden=!(q&&n===0&&docs.length>0); };
}
function avatarHtml(d, cls, extra){ return d.photoDataUrl ? `<img class="${cls}" src="${d.photoDataUrl}" alt="" style="object-fit:cover; ${extra||''}">` : `<div class="${cls}" style="background:${d.color}; ${extra||''}">${initials(d.name)}</div>`; }

/* ---- SuperAdmin > Website tab ---- */
async function fitImage(file,maxDim,maxChars){
  if(!/^image\//.test(file.type)) throw new Error('Sirf image file chunein (JPG ya PNG)');
  let dim=maxDim, q=0.8, out='';
  for(let i=0;i<7;i++){ out=await fileToDataUrl(file,dim,q); if(out.length<=maxChars) return out; dim=Math.round(dim*0.82); q=Math.max(0.5,q-0.05); }
  throw new Error('Image bahut badi hai. Chhoti image chunein.');
}
function saWebsite(v){
  const s=siteCfg(), pub=state.platform.public, docs=state.doctors.filter(d=>!d.deleted);
  const prev=(u,id)=>safeImg(u)?`<img id="${id}" src="${safeImg(u)}" alt="" style="max-width:100%;max-height:140px;border-radius:12px;display:block;margin-bottom:8px;">`:`<div class="muted" id="${id}" style="margin-bottom:8px;">Abhi default image lagi hai.</div>`;
  v.innerHTML=`<div class="card" style="max-width:720px;"><div class="section-label">Website contact details</div>
    <div class="muted" style="margin-bottom:10px;">Ye details website ke Contact section mein dikhengi. Jo khaali chhodenge wo nahi dikhega. Sab khaali ho to Contact section chhupa rahega.</div>
    <div class="field-row"><div class="field"><label>Phone number</label><input id="ws-phone" type="tel" value="${esc(s.phone)}" placeholder="+91 98XXXXXXXX"></div><div class="field"><label>WhatsApp number</label><input id="ws-wa" type="tel" value="${esc(s.whatsapp)}" placeholder="Khaali ho to phone use hoga"></div></div>
    <div class="field"><label>Email</label><input id="ws-email" type="email" value="${esc(s.email)}" placeholder="support@example.com"></div>
    <div class="field"><label>Address</label><input id="ws-addr" value="${esc(s.address)}" placeholder="Office ka address"></div>
    <div class="field"><label>Support timing</label><input id="ws-hours" value="${esc(s.hours)}" placeholder="Jaise: Somvar se Shanivar, subah 10 se shaam 6 baje"></div></div>
    <div class="card mt" style="max-width:720px;"><div class="section-label">Website images</div>
    <div class="muted" style="margin-bottom:10px;">Image chunenge to wahi lagegi. Nahi chunenge to achhi default image dikhti rahegi. Image apne aap chhoti (compress) ho jaati hai.</div>
    <div class="field"><label>Main banner image (upar ki badi image)</label>${prev(s.heroImage,'ws-hero-pv')}<input type="file" id="ws-hero" accept="image/*">${switchRow('ws-hero-rm','Default image wapas lagayein','',false)}</div>
    <div class="field mt"><label>Doctors section image (app ke saath wali image)</label>${prev(s.appImage,'ws-app-pv')}<input type="file" id="ws-app" accept="image/*">${switchRow('ws-app-rm','Default image wapas lagayein','',false)}</div></div>
    <div class="card mt" style="max-width:720px;"><div class="section-label">Doctor photo on website</div>
    <div class="muted" style="margin-bottom:6px;">Jin doctors ne apni photo website par dikhane ki ijazat di hai, unhe yahan chalu karein. Baaki doctors ke card par sirf naam ke akshar dikhenge. Photo doctor apni profile settings mein add karte hain.</div>
    ${docs.length?docs.map(d=>switchRow('ws-ph-'+d.id,d.name+' · '+(d.spec||''),d.photoDataUrl?'Photo uploaded hai':'Abhi photo nahi hai',s.photoIds.includes(d.id))).join(''):'<div class="muted">Abhi koi doctor nahi hai.</div>'}</div>
    <div class="row gap8 mt" style="max-width:720px;"><button class="btn btn-coral" id="ws-save">Save website</button><button class="btn btn-outline" id="ws-view">Website dekhein</button></div>`;
  $('ws-hero').onchange=e=>{ const f=e.target.files[0]; if(f){ const el=$('ws-hero-pv'); el.outerHTML=`<img id="ws-hero-pv" src="${URL.createObjectURL(f)}" alt="" style="max-width:100%;max-height:140px;border-radius:12px;display:block;margin-bottom:8px;">`; } };
  $('ws-app').onchange=e=>{ const f=e.target.files[0]; if(f){ const el=$('ws-app-pv'); el.outerHTML=`<img id="ws-app-pv" src="${URL.createObjectURL(f)}" alt="" style="max-width:100%;max-height:140px;border-radius:12px;display:block;margin-bottom:8px;">`; } };
  $('ws-view').onclick=()=>{ location.hash='#/'; };
  $('ws-save').onclick=async()=>{
    const before=pub.site; 
    try{
      const n=Object.assign({},s);
      n.phone=$('ws-phone').value.trim(); n.whatsapp=$('ws-wa').value.trim(); n.email=$('ws-email').value.trim(); n.address=$('ws-addr').value.trim(); n.hours=$('ws-hours').value.trim();
      const hf=$('ws-hero').files[0], af=$('ws-app').files[0];
      if($('ws-hero-rm').checked) n.heroImage=''; else if(hf) n.heroImage=await fitImage(hf,1000,130000);
      if($('ws-app-rm').checked) n.appImage=''; else if(af) n.appImage=await fitImage(af,800,100000);
      n.photoIds=docs.filter(d=>{ const el=$('ws-ph-'+d.id); return el&&el.checked; }).map(d=>d.id);
      pub.site=n; await savePlatform(); toast('Website updated'); renderSuperadmin();
    }catch(e){ if(before===undefined) delete pub.site; else pub.site=before; toast(errMsg(e)); }
  };
}

/* ================= QR CODE (byte mode, ECC level M, versions 1-10) ================= */
const QRGen = (function(){
  const ECC=[0,10,16,26,18,24,16,18,22,22,26], BLK=[0,1,1,1,2,2,4,4,4,5,5];
  const rawModules=v=>{ let r=(16*v+128)*v+64; if(v>=2){ const n=Math.floor(v/7)+2; r-=(25*n-10)*n-55; if(v>=7) r-=36; } return r; };
  const dataCw=v=>Math.floor(rawModules(v)/8)-ECC[v]*BLK[v];
  const mul=(x,y)=>{ let z=0; for(let i=7;i>=0;i--){ z=(z<<1)^((z>>>7)*0x11D); z^=((y>>>i)&1)*x; } return z; };
  const divisor=deg=>{ const r=new Array(deg).fill(0); r[deg-1]=1; let root=1; for(let i=0;i<deg;i++){ for(let j=0;j<r.length;j++){ r[j]=mul(r[j],root); if(j+1<r.length) r[j]^=r[j+1]; } root=mul(root,2); } return r; };
  const remainder=(data,div)=>{ const r=div.map(()=>0); data.forEach(b=>{ const f=b^r.shift(); r.push(0); div.forEach((c,i)=>{ r[i]^=mul(c,f); }); }); return r; };
  function interleave(data,v){
    const nb=BLK[v], el=ECC[v], raw=Math.floor(rawModules(v)/8), ns=nb-raw%nb, sl=Math.floor(raw/nb), div=divisor(el), blocks=[];
    for(let i=0,k=0;i<nb;i++){ const dat=data.slice(k,k+sl-el+(i<ns?0:1)); k+=dat.length; const ecc=remainder(dat,div); if(i<ns) dat.push(0); blocks.push(dat.concat(ecc)); }
    const out=[]; for(let i=0;i<blocks[0].length;i++) blocks.forEach((b,j)=>{ if(i!==sl-el||j>=ns) out.push(b[i]); }); return out;
  }
  const bit=(x,i)=>((x>>>i)&1)!==0;
  function encode(text){
    const bytes=Array.from(new TextEncoder().encode(String(text)));
    let ver=0; for(let v=1;v<=10;v++){ const cc=v<=9?8:16; if(4+cc+bytes.length*8<=dataCw(v)*8){ ver=v; break; } }
    if(!ver) throw new Error('QR text too long');
    const bits=[]; const put=(val,len)=>{ for(let i=len-1;i>=0;i--) bits.push((val>>>i)&1); };
    put(4,4); put(bytes.length, ver<=9?8:16); bytes.forEach(b=>put(b,8));
    const cap=dataCw(ver)*8; put(0,Math.min(4,cap-bits.length)); put(0,(8-bits.length%8)%8);
    for(let pad=0xEC;bits.length<cap;pad^=0xEC^0x11) put(pad,8);
    const data=new Array(bits.length/8).fill(0); bits.forEach((b,i)=>{ data[i>>>3]|=b<<(7-(i&7)); });
    const all=interleave(data,ver), size=ver*4+17;
    const m=Array.from({length:size},()=>new Array(size).fill(false)), fn=Array.from({length:size},()=>new Array(size).fill(false));
    const setFn=(x,y,c)=>{ m[y][x]=c; fn[y][x]=true; };
    for(let i=0;i<size;i++){ setFn(6,i,i%2===0); setFn(i,6,i%2===0); }
    const finder=(x,y)=>{ for(let dy=-4;dy<=4;dy++) for(let dx=-4;dx<=4;dx++){ const d=Math.max(Math.abs(dx),Math.abs(dy)), xx=x+dx, yy=y+dy; if(xx>=0&&xx<size&&yy>=0&&yy<size) setFn(xx,yy,d!==2&&d!==4); } };
    finder(3,3); finder(size-4,3); finder(3,size-4);
    let ap=[]; if(ver>1){ const n=Math.floor(ver/7)+2, step=Math.ceil((ver*4+4)/(n*2-2))*2; ap=[6]; for(let p=size-7;ap.length<n;p-=step) ap.splice(1,0,p); }
    ap.forEach((a,i)=>ap.forEach((b,j)=>{ if((i===0&&j===0)||(i===0&&j===ap.length-1)||(i===ap.length-1&&j===0)) return; for(let dy=-2;dy<=2;dy++) for(let dx=-2;dx<=2;dx++) setFn(a+dx,b+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1); }));
    const fmt=mask=>{ const d=(0<<3)|mask; let r=d; for(let i=0;i<10;i++) r=(r<<1)^((r>>>9)*0x537); const b=((d<<10)|r)^0x5412;
      for(let i=0;i<=5;i++) setFn(8,i,bit(b,i)); setFn(8,7,bit(b,6)); setFn(8,8,bit(b,7)); setFn(7,8,bit(b,8)); for(let i=9;i<15;i++) setFn(14-i,8,bit(b,i));
      for(let i=0;i<8;i++) setFn(size-1-i,8,bit(b,i)); for(let i=8;i<15;i++) setFn(8,size-15+i,bit(b,i)); setFn(8,size-8,true); };
    fmt(0);
    if(ver>=7){ let r=ver; for(let i=0;i<12;i++) r=(r<<1)^((r>>>11)*0x1F25); const b=(ver<<12)|r; for(let i=0;i<18;i++){ const c=bit(b,i), a=size-11+i%3, d=Math.floor(i/3); setFn(a,d,c); setFn(d,a,c); } }
    let k=0; for(let right=size-1;right>=1;right-=2){ if(right===6) right=5; for(let vert=0;vert<size;vert++) for(let j=0;j<2;j++){ const x=right-j, up=((right+1)&2)===0, y=up?size-1-vert:vert; if(!fn[y][x]&&k<all.length*8){ m[y][x]=bit(all[k>>>3],7-(k&7)); k++; } } }
    const mask=(mk)=>{ for(let y=0;y<size;y++) for(let x=0;x<size;x++){ if(fn[y][x]) continue; let inv; switch(mk){ case 0:inv=(x+y)%2===0;break; case 1:inv=y%2===0;break; case 2:inv=x%3===0;break; case 3:inv=(x+y)%3===0;break; case 4:inv=(Math.floor(x/3)+Math.floor(y/2))%2===0;break; case 5:inv=x*y%2+x*y%3===0;break; case 6:inv=(x*y%2+x*y%3)%2===0;break; default:inv=((x+y)%2+x*y%3)%2===0; } if(inv) m[y][x]=!m[y][x]; } };
    const penalty=()=>{ let p=0, dark=0;
      const line=(get)=>{ let run=1; for(let i=1;i<size;i++){ if(get(i)===get(i-1)) run++; else { if(run>=5) p+=3+run-5; run=1; } } if(run>=5) p+=3+run-5;
        const s=[]; for(let i=0;i<size;i++) s.push(get(i)?1:0); const pat=[1,0,1,1,1,0,1];
        for(let i=0;i+7<=size;i++){ if(pat.every((v,j)=>s[i+j]===v)){ const before=i>=4&&s.slice(i-4,i).every(v=>v===0), after=i+11<=size&&s.slice(i+7,i+11).every(v=>v===0); if(before) p+=40; if(after) p+=40; } } };
      for(let y=0;y<size;y++){ line(i=>m[y][i]); } for(let x=0;x<size;x++){ line(i=>m[i][x]); }
      for(let y=0;y<size-1;y++) for(let x=0;x<size-1;x++){ const c=m[y][x]; if(c===m[y][x+1]&&c===m[y+1][x]&&c===m[y+1][x+1]) p+=3; }
      m.forEach(r=>r.forEach(c=>{ if(c) dark++; })); const t=size*size; p+=(Math.ceil(Math.abs(dark*20-t*10)/t)-1)*10; return p; };
    let best=0, bestP=Infinity; for(let mk=0;mk<8;mk++){ mask(mk); fmt(mk); const pn=penalty(); if(pn<bestP){ bestP=pn; best=mk; } mask(mk); }
    mask(best); fmt(best);
    return { size, modules:m };
  }
  function toSvg(text, opts){ opts=opts||{}; const q=encode(text), b=opts.border==null?2:opts.border, n=q.size+b*2; let d='';
    q.modules.forEach((row,y)=>row.forEach((c,x)=>{ if(c) d+=`M${x+b},${y+b}h1v1h-1z`; }));
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" style="width:100%;height:auto;display:block"><rect width="${n}" height="${n}" fill="#fff"/><path d="${d}" fill="${opts.color||'#000'}"/></svg>`; }
  function toCanvas(canvas, text, px, border){ const q=encode(text), b=border==null?2:border, n=q.size+b*2, s=Math.max(1,Math.floor(px/n)); canvas.width=canvas.height=n*s; const c=canvas.getContext('2d'); c.fillStyle='#fff'; c.fillRect(0,0,canvas.width,canvas.height); c.fillStyle='#000'; q.modules.forEach((row,y)=>row.forEach((v,x)=>{ if(v) c.fillRect((x+b)*s,(y+b)*s,s,s); })); return canvas; }
  return { encode, toSvg, toCanvas };
})();

/* ================= SUPERADMIN ================= */
const liveDoctors = ()=>state.doctors.filter(d=>!d.deleted);
function downloadCsv(name, rows){
  const q=v=>'"'+String(v==null?'':unesc(v)).replace(/"/g,'""')+'"';
  const blob=new Blob(['\ufeff'+rows.map(r=>r.map(q).join(',')).join('\n')],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },500);
}
function uniqueLoginId(base){ let id=base, n=2; while(state.doctors.some(d=>String(d.loginId||'').toLowerCase()===id.toLowerCase())) id=base+n++; return id; }
function subBadge(i){ return i.bucket==='expired'?'<span class="status-badge st-expired">Expired</span>':i.bucket==='expiring'?'<span class="status-badge st-expiring">Expiring</span>':i.status==='paid'?'<span class="status-badge st-paid">Paid</span>':'<span class="status-badge st-unpaid">Unpaid</span>'; }
function acctBadge(d){ return d.active===false?'<span class="status-badge st-inactive">Inactive</span>':'<span class="status-badge st-active">Active</span>'; }
function planById(id){ return (state.platform.settings.plans||[]).find(p=>p.id===id); }
function docStatsFor(d){
  const ap=state.appointments.filter(a=>a.doctorId===d.id), pays=state.payments.filter(p=>p.doctorId===d.id&&p.status==='success');
  return { appts:ap.length, patients:new Set(ap.map(a=>a.patientPhone)).size, revenue:pays.reduce((s,p)=>s+p.amount,0), expenses:state.ledger.filter(l=>l.doctorId===d.id&&l.type==='expense').reduce((s,l)=>s+l.amount,0) };
}
function subHistoryAll(){ const out=[]; liveDoctors().forEach(d=>((d.subscription||{}).history||[]).forEach(h=>out.push({...h,doctor:d}))); return out.sort((a,b)=>(b.date||'').localeCompare(a.date||'')); }
function platformStats(){
  const docs=liveDoctors(), st=state.platform.settings, infos=docs.map(d=>subInfo(d,st)), today=todayStr();
  return { total:docs.length, active:docs.filter(d=>d.active!==false).length, inactive:docs.filter(d=>d.active===false).length,
    paid:infos.filter(i=>i.status==='paid'&&i.bucket!=='expired').length, unpaid:infos.filter(i=>i.status!=='paid'||i.bucket==='expired').length, expiring:infos.filter(i=>i.bucket==='expiring').length,
    appts:state.appointments.length, today:state.appointments.filter(a=>a.date===today&&a.status!=='cancelled').length,
    patients:new Set(state.appointments.map(a=>a.doctorId+'|'+a.patientPhone)).size, revenue:subHistoryAll().reduce((s,h)=>s+(Number(h.amount)||0),0),
    patientPay:state.payments.filter(p=>p.status==='success').reduce((s,p)=>s+p.amount,0) };
}
function applyExpiryPolicy(){
  const st=state.platform.settings; if(!st.autoDeactivateOnExpiry) return; let n=0;
  liveDoctors().forEach(d=>{ const i=subInfo(d,st); if(d.active!==false && i.expiry && i.days<0){ d.active=false; d.deactivatedReason='Subscription expired'; n++; } });
  if(n){ saveState(); toast(n+' doctor(s) deactivated — subscription expired'); }
}
function recordSubPayment(d,p){
  const s=d.subscription=d.subscription||{}, plan=planById(p.planId)||{}, cycle=plan.cycle||s.cycle||'monthly', days=CYCLE_DAYS[cycle]||30, today=p.date||todayStr();
  const activeNow=s.expiry&&s.expiry>=todayStr(), from=activeNow?s.expiry:today, to=addDays(from,days);
  s.planId=plan.id||s.planId||''; s.planName=plan.name||s.planName||'Custom'; s.cycle=cycle; s.amount=Number(p.amount!=null?p.amount:plan.price)||0;
  s.start=activeNow?(s.start||today):today; s.expiry=to; s.status='paid'; s.paymentRef=p.ref||''; s.lastPaymentDate=today;
  s.history=s.history||[]; s.history.push({id:uid(),date:today,amount:s.amount,method:p.method||'Other',ref:p.ref||'',note:p.note||'',planName:s.planName,from:activeNow?addDays(from,1):today,to});
}
function subFilterOk(d,chip){ const i=subInfo(d,state.platform.settings);
  return chip==='all'||(chip==='paid'&&i.status==='paid'&&i.bucket!=='expired')||(chip==='unpaid'&&(i.status!=='paid'))||(chip==='expiring'&&i.bucket==='expiring')||(chip==='expired'&&i.bucket==='expired')||(chip==='active'&&d.active!==false)||(chip==='inactive'&&d.active===false); }
function searchDoc(d,q){ if(!q) return true; q=q.toLowerCase(); const i=subInfo(d,state.platform.settings);
  return [d.name,d.spec,d.mobile,d.clinicName,d.loginId,d.email,d.clinicPhone,i.plan,i.status,i.bucket,d.active===false?'inactive':'active'].some(v=>String(v||'').toLowerCase().includes(q)); }

async function createDoctor(data){
  const base='dr-'+slugify(data.name); let slug=base, n=2; while(docBySlug(slug)) slug=base+'-'+n++;
  const loginId=uniqueLoginId(genLoginId(data.name,data.mobile));
  const acc=await Backend.createDoctorAccount(data.email, loginId, uid()+uid());
  const fee=Number(data.fee)||0;
  const d=normalizeDoctor({ id:acc.uid, slug, name:data.name, spec:data.spec, exp:data.exp, fee, fees:[{id:uid(),label:'Consultation',amount:fee}], bio:data.bio||'', color:AVATAR_COLORS[state.doctors.length%AVATAR_COLORS.length],
    clinicName:data.clinicName||data.name, clinicAddress:data.clinicAddress||'', clinicPhone:data.clinicPhone||data.mobile, clinicEmail:data.clinicEmail||'', photoDataUrl:data.photoDataUrl||null, logoDataUrl:data.logoDataUrl||null,
    payMethods:data.payMethods||defaultPayMethods(), schedule:data.schedule||defaultSchedule(), settings:Object.assign(defaultSettings(),data.settings||{}), active:true, createdAt:new Date().toISOString(),
    mobile:data.mobile, email:data.email.toLowerCase(), loginId, mustChangePassword:true, subscription:Object.assign({status:'unpaid',history:[]},data.subscription||{}) });
  state.doctors.push(d);
  try{ await saveNow(); }catch(e){ state.doctors=state.doctors.filter(x=>x!==d); throw e; }
  return { doctor:d, tempPassword:acc.tempPassword };
}
function credentialsText(d,tempPw){ return `${APP_CONFIG.brand} — Doctor Login\n\nDoctor: ${unesc(d.name)}\nLogin ID: ${d.loginId}\nEmail: ${d.email}\nTemporary password: ${tempPw}\n\nLogin: ${loginUrl()}\nBooking page: ${publicUrl(d.slug)}\n\nAap pehli login par password badal denge. Ye credentials kisi se share na karein.`; }
function openCredentialsModal(d,tempPw,title){
  const text=credentialsText(d,tempPw);
  openModal(`<h3>${title||'Doctor account ready'}</h3><div class="sub">Temporary password sirf <b>abhi ek baar</b> dikhega — save/share kar lein. Ye kahin store nahi hota.</div>
    <div class="kv-list mt"><div class="r"><span>Login ID</span><span class="mono">${d.loginId}</span></div><div class="r"><span>Email</span><span>${d.email}</span></div><div class="r"><span>Temporary password</span><span class="mono" id="cr-pw">${tempPw}</span></div></div>
    <div class="modal-actions" style="flex-direction:column;gap:10px;"><button class="btn btn-coral btn-block" id="cr-wa">${ICONS.share} Share on WhatsApp</button><button class="btn btn-outline btn-block" id="cr-copy">${ICONS.copy} Copy credentials</button><button class="btn btn-ghost btn-block" id="cr-done">Done</button></div>`);
  $('cr-wa').onclick=()=>window.open(waLink(d.mobile,text),'_blank'); $('cr-copy').onclick=()=>copyText(text,ok=>toast(ok?'Copied':'Copy nahi hua')); $('cr-done').onclick=()=>{ closeModal(); renderSuperadmin(); };
}

function renderSuperadmin(){
  if(session.role!=='superadmin'){ renderSuperadminLogin(); return; }
  const titles={dashboard:'Dashboard',doctors:'Doctors',subscriptions:'Subscriptions',payments:'Platform Payments',appointments:'Appointments',patients:'Patients',reports:'Reports',website:'Website',settings:'Settings'};
  const view=staffShell({ nav:SA_NAV, active:ui.saTab, title:ui.saDoctorId&&ui.saTab==='doctors'?'Doctor Profile':(ui.wiz?'Add Doctor':titles[ui.saTab]),
    mark:ICONS.shield, markStyle:'background:linear-gradient(155deg,#0E4F49,#0A3733);', sub:'SuperAdmin', whoName:esc(session.email||''), whoSub:'Platform admin',
    onNav:id=>{ ui.saTab=id; ui.saDoctorId=null; ui.wiz=null; renderSuperadmin(); },
    actions:`<input type="search" id="sa-gs" placeholder="Search doctors…" style="border:1px solid var(--border); border-radius:10px; padding:9px 12px; background:var(--surface); color:var(--ink); width:170px;"><button class="btn btn-coral btn-sm" id="sa-add">${ICONS.plus} Add Doctor</button>` });
  $('sa-add').onclick=()=>{ ui.saTab='doctors'; ui.saDoctorId=null; ui.wiz={step:1,d:{}}; renderSuperadmin(); };
  $('sa-gs').addEventListener('keydown',e=>{ if(e.key==='Enter'){ ui.saFilter.q=e.target.value.trim(); ui.saTab='doctors'; ui.saDoctorId=null; ui.wiz=null; renderSuperadmin(); } });
  if(ui.wiz&&ui.saTab==='doctors') return saWizard(view);
  ({dashboard:saDashboard,doctors:saDoctors,subscriptions:saSubscriptions,payments:saPayments,appointments:saAppointments,patients:saPatients,reports:saReports,website:saWebsite,settings:saSettings})[ui.saTab](view);
}

function seriesDaily(n, filterFn){ const out=[]; for(let i=n-1;i>=0;i--){ const d=addDays(todayStr(),-i); out.push({label:dow(d)+' '+new Date(d+'T00:00:00').getDate(), value:state.appointments.filter(a=>a.date===d&&a.status!=='cancelled'&&(!filterFn||filterFn(a))).length}); } return out; }
function seriesMonthlyRevenue(){ const out=[], now=new Date(); for(let i=5;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth()-i,1), key=d.getFullYear()+'-'+pad(d.getMonth()+1); out.push({label:d.toLocaleDateString('en-IN',{month:'short'}), value:subHistoryAll().filter(h=>(h.date||'').startsWith(key)).reduce((s,h)=>s+(Number(h.amount)||0),0)}); } return out; }

function saDashboard(v){
  const s=platformStats(), st=state.platform.settings, exp=liveDoctors().map(d=>({d,i:subInfo(d,st)})).filter(x=>x.i.bucket==='expiring'||x.i.bucket==='expired').sort((a,b)=>a.i.days-b.i.days);
  v.innerHTML=`
    ${(!FIREBASE_MODE&&liveDoctors().length===0)?`<div class="banner ok"><span>Demo mode mein test karne ke liye sample doctors load kar sakte hain.</span><button class="btn btn-coral btn-sm" id="sa-seed">Load sample doctors</button></div>`:''}
    <div class="kpis">
      ${kpi('Total Doctors',s.total)}${kpi('Active Doctors',s.active,'','var(--teal)')}${kpi('Inactive Doctors',s.inactive)}${kpi('Paid Subscriptions',s.paid,'','var(--teal)')}${kpi('Unpaid Subscriptions',s.unpaid,'','var(--red)')}
      ${kpi('Expiring Soon',s.expiring,'in '+(st.expiryWarnDays||7)+' days','#96660E')}${kpi('Total Appointments',s.appts)}${kpi("Today's Appointments",s.today)}${kpi('Total Patients',s.patients)}${kpi('Platform Revenue',money(s.revenue),'subscription payments')}
    </div>
    <div class="grid-2 eq">
      <div class="card"><div class="section-label">Appointments — last 14 days</div>${barChartHtml(seriesDaily(14),{color:'teal'})}</div>
      <div class="card"><div class="section-label">Subscription revenue — last 6 months</div>${barChartHtml(seriesMonthlyRevenue(),{prefix:'₹',color:'mint'})}</div>
    </div>
    <div class="card mt"><div class="section-label">Subscriptions needing attention</div>
      ${exp.length===0?emptyBox('Sab theek hai — koi subscription expire nahi ho rahi.','check'):exp.map(x=>`<div class="appt-row"><div class="appt-info"><div class="nm">${x.d.name}</div><div class="ph">${x.i.label}</div></div>${subBadge(x.i)}<button class="btn btn-outline btn-sm" data-sub="${x.d.id}">Renew</button></div>`).join('')}
    </div>`;
  v.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>openRecordPaymentModal(docById(b.dataset.sub)));
  const seed=$('sa-seed'); if(seed) seed.onclick=seedSampleDoctors;
}

function saDoctors(v){
  if(ui.saDoctorId) return saDoctorProfile(v,docById(ui.saDoctorId));
  const f=ui.saFilter, chips=[['all','All'],['active','Active'],['inactive','Inactive'],['paid','Paid'],['unpaid','Unpaid'],['expired','Expired'],['expiring','Expiring Soon']].map(c=>({id:c[0],label:c[1]}));
  const list=liveDoctors().filter(d=>subFilterOk(d,f.chip)&&searchDoc(d,f.q)).sort((a,b)=>(a.createdAt||'').localeCompare(b.createdAt||''));
  v.innerHTML=`
    <div class="tools"><input type="search" id="sd-q" class="grow" placeholder="Search name, mobile, specialty, clinic, login ID, subscription…" value="${esc(f.q)}"><button class="btn btn-outline btn-sm" id="sd-csv">Export CSV</button></div>
    ${chipsHtml(chips,f.chip,'data-chip')}
    ${list.length===0?`<div class="card">${emptyBox('Koi doctor nahi mila. "Add Doctor" se naya doctor jodein.','users')}</div>`:`
    <div class="tscroll"><table class="rtable cards"><thead><tr><th>No.</th><th>Doctor</th><th>Specialty</th><th>Exp.</th><th>Mobile</th><th>Clinic</th><th>Clinic No.</th><th>Plan</th><th>Start</th><th>Expiry</th><th>Payment</th><th>Account</th><th>Login ID</th><th>Booking Page</th><th>Actions</th></tr></thead><tbody>
    ${list.map(d=>{ const i=subInfo(d,state.platform.settings); return `<tr>
      <td data-l="No.">${serialOf(d)}</td><td data-l="Doctor"><b>${d.name}</b></td><td data-l="Specialty">${d.spec}</td><td data-l="Experience">${d.exp?d.exp+' yrs':'—'}</td><td data-l="Mobile">${d.mobile||'—'}</td>
      <td data-l="Clinic">${d.clinicName||'—'}</td><td data-l="Clinic No.">${d.clinicPhone||'—'}</td><td data-l="Plan">${i.plan}</td><td data-l="Start">${i.start?niceDate(i.start):'—'}</td><td data-l="Expiry">${i.expiry?niceDate(i.expiry):'—'}</td>
      <td data-l="Payment">${subBadge(i)}</td><td data-l="Account">${acctBadge(d)}</td><td data-l="Login ID" class="mono" style="font-size:12px;">${d.loginId||'—'}</td>
      <td data-l="Booking Page"><a href="${publicUrl(d.slug)}" target="_blank" rel="noopener" style="color:var(--teal); font-weight:600;">/book/${d.slug}</a></td>
      <td data-l="Actions" class="row gap8" style="flex-wrap:nowrap;"><button class="btn btn-outline btn-sm" data-view="${d.id}">View</button><button class="btn btn-ghost btn-sm" data-act="${d.id}">Actions ▾</button></td></tr>`; }).join('')}
    </tbody></table></div>`}`;
  $('sd-q').addEventListener('input',e=>{ f.q=e.target.value.trim(); clearTimeout(saDoctors._t); saDoctors._t=setTimeout(()=>{ const p=e.target.selectionStart; renderSuperadmin(); const el=$('sd-q'); if(el){ el.focus(); try{ el.setSelectionRange(p,p); }catch(x){} } },250); });
  v.querySelectorAll('[data-chip]').forEach(b=>b.onclick=()=>{ f.chip=b.dataset.chip; renderSuperadmin(); });
  v.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{ ui.saDoctorId=b.dataset.view; renderSuperadmin(); });
  v.querySelectorAll('[data-act]').forEach(b=>b.onclick=()=>openDoctorActions(docById(b.dataset.act)));
  $('sd-csv').onclick=()=>downloadCsv('doctors.csv',[['No','Name','Specialty','Experience','Mobile','Clinic','Clinic phone','Plan','Start','Expiry','Payment','Account','Login ID','Booking page']].concat(list.map(d=>{ const i=subInfo(d,state.platform.settings); return [serialOf(d),d.name,d.spec,d.exp,d.mobile,d.clinicName,d.clinicPhone,i.plan,i.start||'',i.expiry||'',i.status,d.active===false?'Inactive':'Active',d.loginId,publicUrl(d.slug)]; })));
}

function viewAsDoctor(d){ ui.viewAsDoctorId=d.id; ui.adminTab='overview'; location.hash='#/doctor'; if(location.hash==='#/doctor') enterRoute(); }
function openDoctorActions(d){
  const act=d.active!==false;
  const items=[['view','View Doctor','users'],['edit','Edit Doctor','file'],['dash','View Dashboard','overview'],['open','Open Booking Page','link'],['copy','Copy Booking Link','copy'],['share','Share Booking Link','share'],['sub','Subscription','card'],['paid','Mark Paid','check'],['unpaid','Mark Unpaid','x'],[act?'deact':'act',act?'Deactivate':'Activate','shield'],['reset','Reset Password','lock'],['login','View Login ID','lock'],['del','Delete Doctor','trash']];
  openModal(`<h3>${d.name}</h3><div class="sub">${serialOf(d)} · ${d.spec}</div><div class="mt">${items.map(i=>`<button class="menu-item ${i[0]==='del'?'danger':''}" data-a="${i[0]}">${ICONS[i[2]]||''} ${i[1]}</button>`).join('')}</div>`);
  document.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{ const a=b.dataset.a; closeModal(); doctorAction(d,a); });
}
async function doctorAction(d,a){
  if(a==='view'){ ui.saDoctorId=d.id; ui.saTab='doctors'; renderSuperadmin(); }
  else if(a==='edit') openEditDoctorModal(d);
  else if(a==='dash') viewAsDoctor(d);
  else if(a==='open') window.open(publicUrl(d.slug),'_blank');
  else if(a==='copy') copyText(publicUrl(d.slug),ok=>toast(ok?'Booking link copied':'Copy nahi hua'));
  else if(a==='share') shareOrCopyLink(publicUrl(d.slug), unesc(d.name)+' — Book an Appointment','#/book/'+d.slug);
  else if(a==='sub') openSubscriptionModal(d);
  else if(a==='paid') openRecordPaymentModal(d);
  else if(a==='unpaid'){ openModal(`<h3>Mark unpaid?</h3><div class="sub">${d.name} ki subscription "Unpaid" ho jayegi. Expiry date wahi rahegi.</div><div class="modal-actions"><button class="btn btn-outline" style="flex:1;" id="cf-no">Cancel</button><button class="btn btn-danger" style="flex:1;" id="cf-yes">Mark Unpaid</button></div>`); $('cf-no').onclick=closeModal; $('cf-yes').onclick=()=>{ (d.subscription=d.subscription||{}).status='unpaid'; saveState(); closeModal(); renderSuperadmin(); toast('Marked unpaid'); }; }
  else if(a==='act'){ d.active=true; delete d.deactivatedReason; await saveState(); renderSuperadmin(); toast('Doctor activated'); }
  else if(a==='deact'){ openModal(`<h3>Deactivate ${d.name}?</h3><div class="sub">Doctor login band ho jayega aur booking page "unavailable" dikhayega. Sara data safe rahega — kabhi bhi Activate kar sakte hain.</div><div class="modal-actions"><button class="btn btn-outline" style="flex:1;" id="cf-no">Cancel</button><button class="btn btn-danger" style="flex:1;" id="cf-yes">Deactivate</button></div>`); $('cf-no').onclick=closeModal; $('cf-yes').onclick=async()=>{ d.active=false; await saveState(); closeModal(); renderSuperadmin(); toast('Doctor deactivated'); }; }
  else if(a==='reset'){
    if(FIREBASE_MODE){ try{ await Backend.resetDoctorPassword(d); toast('Reset link '+d.email+' par bhej diya gaya'); }catch(e){ toast(errMsg(e)); } }
    else { try{ const pw=await Backend.resetDoctorPassword(d); openCredentialsModal(d,pw,'New temporary password'); }catch(e){ toast(errMsg(e)); } }
  }
  else if(a==='login') openModal(`<h3>Login details</h3><div class="kv-list mt"><div class="r"><span>Login ID</span><span class="mono">${d.loginId||'—'}</span></div><div class="r"><span>Email</span><span>${d.email||'—'}</span></div><div class="r"><span>Password</span><span>Never shown</span></div></div><div class="sub mt">Password store ya display nahi hota. Naya password chahiye to "Reset Password" use karein.</div>`);
  else if(a==='del'){
    const st=docStatsFor(d);
    openModal(`<h3 style="color:var(--red);">Delete ${d.name}?</h3><div class="banner bad" style="margin-top:12px;">Warning: is doctor ka booking page turant band ho jayega, login block ho jayega, aur ye ${st.appts} appointment(s), ${st.patients} patient(s) aur unke payment records platform se hide ho jayenge.</div>
      <div class="sub">Behtar option: <b>Deactivate</b> — data wapas laaya ja sakta hai. Delete "soft delete" hai (records database mein rehte hain, permanent erase console se hi hota hai).</div>
      <div class="modal-actions" style="flex-direction:column;gap:10px;"><button class="btn btn-ghost btn-block" id="dl-deact">Deactivate instead (recommended)</button><button class="btn btn-danger btn-block" id="dl-yes">Yes, delete this doctor</button><button class="btn btn-outline btn-block" id="dl-no">Cancel</button></div>`);
    $('dl-no').onclick=closeModal; $('dl-deact').onclick=async()=>{ d.active=false; await saveState(); closeModal(); renderSuperadmin(); toast('Doctor deactivated'); };
    $('dl-yes').onclick=async()=>{ d.deleted=true; d.active=false; d.deletedAt=new Date().toISOString(); await saveState(); closeModal(); ui.saDoctorId=null; renderSuperadmin(); toast('Doctor deleted'); };
  }
}
function openEditDoctorModal(d){
  openModal(`<h3>Edit Doctor</h3>
    <div class="field-row"><div class="field"><label>Doctor Name</label><input id="ed-name" value="${esc(unesc(d.name))}"></div><div class="field"><label>Mobile</label><input id="ed-mobile" value="${esc(d.mobile||'')}"></div></div>
    <div class="field-row"><div class="field"><label>Specialty</label><select id="ed-spec">${specOptions(d.spec)}</select></div><div class="field"><label>Experience (years)</label><input type="number" id="ed-exp" value="${d.exp}"></div></div>
    <div class="field-row"><div class="field"><label>Consultation Fee (₹)</label><input type="number" id="ed-fee" value="${d.fee}"></div><div class="field"><label>Clinic Name</label><input id="ed-clinic" value="${esc(unesc(d.clinicName||''))}"></div></div>
    <div class="field"><label>Clinic Address</label><input id="ed-addr" value="${esc(unesc(d.clinicAddress||''))}"></div>
    <div class="field-row"><div class="field"><label>Clinic Phone</label><input id="ed-cphone" value="${esc(d.clinicPhone||'')}"></div><div class="field"><label>Clinic Email</label><input id="ed-cemail" value="${esc(d.clinicEmail||'')}"></div></div>
    <button class="btn btn-coral btn-block" id="ed-save">Save changes</button>`, {wide:true});
  $('ed-save').onclick=async()=>{ const n=$('ed-name').value.trim(); if(!n){ toast('Naam daalein'); return; }
    Object.assign(d,{name:esc(n),mobile:$('ed-mobile').value.trim(),spec:$('ed-spec').value,exp:Number($('ed-exp').value)||0,fee:Number($('ed-fee').value)||0,clinicName:esc($('ed-clinic').value.trim()),clinicAddress:esc($('ed-addr').value.trim()),clinicPhone:$('ed-cphone').value.trim(),clinicEmail:$('ed-cemail').value.trim()});
    if(d.fees&&d.fees[0]) d.fees[0].amount=d.fee; await saveState(); closeModal(); renderSuperadmin(); toast('Doctor updated'); };
}
function specOptions(sel){ const list=SPECIALTIES.includes(sel)||!sel?SPECIALTIES:[sel].concat(SPECIALTIES); return list.map(s=>`<option ${s===sel?'selected':''}>${s}</option>`).join(''); }

function saDoctorProfile(v,d){
  if(!d){ ui.saDoctorId=null; return saDoctors(v); }
  if(FIREBASE_MODE&&!d._detail){ d._detail=1; Backend.loadDoctorDetail(d.id).then(()=>{ if(ui.saDoctorId===d.id) renderSuperadmin(); }).catch(()=>{}); }
  const i=subInfo(d,state.platform.settings), st=docStatsFor(d), url=publicUrl(d.slug);
  v.innerHTML=`
    <button class="btn btn-outline btn-sm" id="pf-back">${ICONS.back} All doctors</button>
    <div class="card mt" style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
      ${avatarHtml(d,'doc-avatar','width:64px;height:64px;font-size:22px;')}
      <div style="flex:1; min-width:200px;"><h3 style="font-size:22px;">${d.name}</h3><div class="muted">${d.spec} · ${d.exp?d.exp+' yrs · ':''}${serialOf(d)}</div><div style="margin-top:6px;">${acctBadge(d)} ${subBadge(i)}</div></div>
      <div class="row gap8"><button class="btn btn-coral btn-sm" data-q="dash">Open Dashboard</button><button class="btn btn-outline btn-sm" data-q="edit">Edit</button></div>
    </div>
    <div class="kpis mt">${kpi('Appointments',st.appts)}${kpi('Patients',st.patients)}${kpi('Revenue recorded',money(st.revenue))}${kpi('Expenses',money(st.expenses))}</div>
    <div class="grid-2 eq">
      <div class="card"><div class="section-label">Doctor & clinic</div><div class="kv-list">
        <div class="r"><span>Mobile</span><span>${d.mobile||'—'}</span></div><div class="r"><span>Consultation fee</span><span>${money(d.fee)}</span></div><div class="r"><span>Clinic</span><span>${d.clinicName||'—'}</span></div>
        <div class="r"><span>Address</span><span>${d.clinicAddress||'—'}</span></div><div class="r"><span>Clinic phone</span><span>${d.clinicPhone||'—'}</span></div><div class="r"><span>Clinic email</span><span>${d.clinicEmail||'—'}</span></div></div></div>
      <div class="card"><div class="section-label">Account</div><div class="kv-list">
        <div class="r"><span>Login ID</span><span class="mono">${d.loginId||'—'}</span></div><div class="r"><span>Email</span><span>${d.email||'—'}</span></div><div class="r"><span>Login status</span><span>${d.mustChangePassword?'Temporary password pending':'Password set'}</span></div>
        <div class="r"><span>Account status</span><span>${d.active===false?'Inactive':'Active'}</span></div><div class="r"><span>Created</span><span>${niceDate((d.createdAt||'').slice(0,10))}</span></div></div></div>
    </div>
    <div class="grid-2 eq mt">
      <div class="card"><div class="section-label">Subscription</div><div class="kv-list">
        <div class="r"><span>Plan</span><span>${i.plan}</span></div><div class="r"><span>Amount</span><span>${money(i.amount)}</span></div><div class="r"><span>Start</span><span>${i.start?niceDate(i.start):'—'}</span></div>
        <div class="r"><span>Expiry</span><span>${i.expiry?niceDate(i.expiry):'—'}</span></div><div class="r"><span>Status</span><span>${i.label}</span></div></div>
        <div class="row gap8 mt"><button class="btn btn-outline btn-sm" data-q="sub">Change subscription</button><button class="btn btn-ghost btn-sm" data-q="paid">Record payment</button></div></div>
      <div class="card" style="text-align:center;"><div class="section-label">Booking page & QR</div><div style="width:150px; margin:0 auto 10px;">${QRGen.toSvg(url,{border:1})}</div>
        <div class="muted" style="word-break:break-all;">${url}</div><div class="row gap8 mt" style="justify-content:center;"><button class="btn btn-outline btn-sm" data-q="open">Open</button><button class="btn btn-outline btn-sm" data-q="copy">Copy</button><button class="btn btn-outline btn-sm" data-q="share">Share</button></div></div>
    </div>
    <div class="card mt"><div class="section-label">Quick actions</div><div class="row gap8">
      <button class="btn btn-outline btn-sm" data-q="${d.active===false?'act':'deact'}">${d.active===false?'Activate':'Deactivate'}</button><button class="btn btn-outline btn-sm" data-q="reset">Reset password</button><button class="btn btn-danger btn-sm" data-q="del">Delete</button></div></div>`;
  $('pf-back').onclick=()=>{ ui.saDoctorId=null; renderSuperadmin(); };
  v.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>doctorAction(d,b.dataset.q));
}

/* ---- Add Doctor wizard ---- */
function saWizard(v){
  const w=ui.wiz, d=w.d, plans=state.platform.settings.plans||[], steps=['Basic info','Account','Subscription','Appointments'];
  const s=d.sched||(d.sched={ slot:20, m1:'09:00', m2:'13:00', e1:'16:00', e2:'20:00', days:[1,2,3,4,5,6], maxDay:0, online:true, cash:true });
  let body='';
  if(w.step===1) body=`
    <div class="field-row"><div class="field"><label>Doctor Name *</label><input id="w-name" value="${esc(d.name||'')}" placeholder="e.g. Dr. Anil Sharma"></div><div class="field"><label>Mobile Number *</label><input id="w-mobile" inputmode="numeric" value="${esc(d.mobile||'')}" placeholder="10-digit mobile"></div></div>
    <div class="field-row"><div class="field"><label>Specialty</label><select id="w-spec">${specOptions(d.spec||SPECIALTIES[0])}</select></div><div class="field"><label>Experience (years)</label><input type="number" id="w-exp" value="${d.exp||''}"></div></div>
    <div class="field-row"><div class="field"><label>Email * (login + password reset)</label><input type="email" id="w-email" value="${esc(d.email||'')}"></div><div class="field"><label>Consultation Fee (₹) *</label><input type="number" id="w-fee" value="${d.fee||''}"></div></div>
    <div class="field-row"><div class="field"><label>Clinic Name</label><input id="w-clinic" value="${esc(d.clinicName||'')}"></div><div class="field"><label>Clinic Phone / Appointment No.</label><input id="w-cphone" value="${esc(d.clinicPhone||'')}"></div></div>
    <div class="field-row"><div class="field"><label>Clinic Address</label><input id="w-addr" value="${esc(d.clinicAddress||'')}"></div><div class="field"><label>Clinic Email</label><input id="w-cemail" value="${esc(d.clinicEmail||'')}"></div></div>
    <div class="field-row"><div class="field"><label>Doctor Photo</label>${d.photoDataUrl?`<img src="${d.photoDataUrl}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;display:block;margin-bottom:6px;">`:''}<input type="file" id="w-photo" accept="image/*"></div><div class="field"><label>Clinic Logo</label>${d.logoDataUrl?`<img src="${d.logoDataUrl}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;display:block;margin-bottom:6px;">`:''}<input type="file" id="w-logo" accept="image/*"></div></div>`;
  if(w.step===2){ const lid=genLoginId(d.name||'doctor',d.mobile); body=`
    <div class="banner ok"><span>Doctor ka <b>Login ID</b> aur <b>temporary password</b> account banate hi automatically ban jayenge.</span></div>
    <div class="kv-list"><div class="r"><span>Login ID (auto)</span><span class="mono">${lid}</span></div><div class="r"><span>Login email</span><span>${esc(d.email||'—')}</span></div><div class="r"><span>Temporary password</span><span>Auto-generated (shown once)</span></div></div>
    <div class="sub mt">Password kabhi save ya dobara display nahi hota. Doctor ko pehli login par naya password set karna hoga. Credentials WhatsApp par share kar sakte hain.</div>`; }
  if(w.step===3){ const sub=d.sub||(d.sub={planId:plans[0]?plans[0].id:'',amount:plans[0]?plans[0].price:0,cycle:plans[0]?plans[0].cycle:'monthly',start:todayStr(),expiry:'',status:'unpaid',ref:'',notes:''});
    body=`<div class="field-row"><div class="field"><label>Plan</label><select id="w-plan">${plans.map(p=>`<option value="${p.id}" ${p.id===sub.planId?'selected':''}>${esc(p.name)} — ${money(p.price)}/${p.cycle}</option>`).join('')||'<option value="">No plans — add in Subscriptions</option>'}</select></div><div class="field"><label>Price (₹)</label><input type="number" id="w-price" value="${sub.amount}"></div></div>
    <div class="field-row"><div class="field"><label>Billing cycle</label><select id="w-cycle">${Object.keys(CYCLE_DAYS).map(c=>`<option ${c===sub.cycle?'selected':''}>${c}</option>`).join('')}</select></div><div class="field"><label>Payment status</label><select id="w-pstatus"><option value="unpaid" ${sub.status==='unpaid'?'selected':''}>Unpaid</option><option value="paid" ${sub.status==='paid'?'selected':''}>Paid</option></select></div></div>
    <div class="field-row"><div class="field"><label>Start date</label><input type="date" id="w-start" value="${sub.start}"></div><div class="field"><label>Expiry date (auto if blank)</label><input type="date" id="w-expiry" value="${sub.expiry||''}"></div></div>
    <div class="field"><label>Payment reference</label><input id="w-ref" value="${esc(sub.ref)}"></div><div class="field"><label>Notes</label><textarea id="w-notes">${esc(sub.notes)}</textarea></div>`; }
  if(w.step===4) body=`
    <div class="field-row"><div class="field"><label>Appointment duration (min)</label><select id="w-slot">${[5,10,15,20,30,45,60].map(n=>`<option ${n==s.slot?'selected':''}>${n}</option>`).join('')}</select></div><div class="field"><label>Max appointments / day (0 = no limit)</label><input type="number" id="w-maxday" value="${s.maxDay}"></div></div>
    <div class="field-row"><div class="field"><label>Morning — from</label><input type="time" id="w-m1" value="${s.m1}"></div><div class="field"><label>Morning — to</label><input type="time" id="w-m2" value="${s.m2}"></div></div>
    <div class="field-row"><div class="field"><label>Evening — from</label><input type="time" id="w-e1" value="${s.e1}"></div><div class="field"><label>Evening — to</label><input type="time" id="w-e2" value="${s.e2}"></div></div>
    <div class="section-label">Working days</div><div class="chips">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((n,i)=>`<button class="chip ${s.days.includes(i)?'on':''}" data-wd="${i}">${n}</button>`).join('')}</div>
    ${switchRow('w-online','Online payment (UPI) option','Patients can see your UPI ID; clinic confirms payment',s.online)}${switchRow('w-cash','Cash payment at clinic','',s.cash)}`;
  v.innerHTML=`<div class="card" style="max-width:760px;"><div class="wiz-steps">${steps.map((_,i)=>`<div class="${i+1<w.step?'done':i+1===w.step?'on':''}"></div>`).join('')}</div>
    <div class="section-label">Step ${w.step} of 4 — ${steps[w.step-1]}</div>${body}
    <div class="row gap8 mt" style="justify-content:space-between;"><button class="btn btn-outline" id="w-back">${w.step===1?'Cancel':'Back'}</button><button class="btn btn-coral" id="w-next">${w.step===4?'Create Doctor':'Next'}</button></div></div>`;
  v.querySelectorAll('[data-wd]').forEach(b=>b.onclick=()=>{ const i=Number(b.dataset.wd); s.days=s.days.includes(i)?s.days.filter(x=>x!==i):s.days.concat(i); b.classList.toggle('on'); });
  const plan=$('w-plan'); if(plan) plan.onchange=()=>{ const p=planById(plan.value); if(p){ $('w-price').value=p.price; $('w-cycle').value=p.cycle; } };
  const grab=async()=>{
    if(w.step===1){ const g=id=>$(id).value.trim(); Object.assign(d,{name:g('w-name'),mobile:g('w-mobile'),spec:$('w-spec').value,exp:g('w-exp'),email:g('w-email'),fee:g('w-fee'),clinicName:g('w-clinic'),clinicPhone:g('w-cphone'),clinicAddress:g('w-addr'),clinicEmail:g('w-cemail')});
      const ph=$('w-photo').files[0], lg=$('w-logo').files[0]; if(ph) d.photoDataUrl=await fileToDataUrl(ph,320,0.8); if(lg) d.logoDataUrl=await fileToDataUrl(lg,256,0.85); }
    if(w.step===3){ const sub=d.sub; Object.assign(sub,{planId:$('w-plan').value,amount:Number($('w-price').value)||0,cycle:$('w-cycle').value,status:$('w-pstatus').value,start:$('w-start').value||todayStr(),expiry:$('w-expiry').value,ref:$('w-ref').value.trim(),notes:$('w-notes').value.trim()}); }
    if(w.step===4){ Object.assign(s,{slot:Number($('w-slot').value),maxDay:Number($('w-maxday').value)||0,m1:$('w-m1').value,m2:$('w-m2').value,e1:$('w-e1').value,e2:$('w-e2').value,online:$('w-online').checked,cash:$('w-cash').checked}); }
  };
  $('w-back').onclick=async()=>{ if(w.step===1){ ui.wiz=null; renderSuperadmin(); return; } await grab(); w.step--; renderSuperadmin(); };
  $('w-next').onclick=async()=>{
    await grab();
    if(w.step===1){ if(!d.name){ toast('Doctor ka naam daalein'); return; } if(!validPhone(d.mobile)){ toast('Sahi 10-digit mobile number daalein'); return; } if(!/^\S+@\S+\.\S+$/.test(d.email||'')){ toast('Sahi email daalein'); return; } if(!(Number(d.fee)>0)){ toast('Consultation fee daalein'); return; } d.mobile=normPhone(d.mobile); }
    if(w.step<4){ w.step++; renderSuperadmin(); return; }
    const btn=$('w-next'); btn.disabled=true; btn.textContent='Creating…';
    try{
      const days={}; for(let i=0;i<7;i++) days[i]={enabled:s.days.includes(i),ranges:[{start:s.m1,end:s.m2},{start:s.e1,end:s.e2}].filter(r=>r.start&&r.end)};
      const sub=d.sub, plan=planById(sub.planId)||{}; const subscription={planId:sub.planId,planName:plan.name||'Custom',amount:sub.amount,cycle:sub.cycle,start:sub.start,expiry:sub.expiry||(sub.status==='paid'?addDays(sub.start,CYCLE_DAYS[sub.cycle]||30):''),status:sub.status,paymentRef:sub.ref,notes:sub.notes,history:[]};
      if(sub.status==='paid') subscription.history.push({id:uid(),date:sub.start,amount:sub.amount,method:'Other',ref:sub.ref,note:sub.notes,planName:subscription.planName,from:sub.start,to:subscription.expiry});
      const res=await createDoctor({ name:esc(d.name), spec:d.spec, exp:Number(d.exp)||0, fee:Number(d.fee), mobile:d.mobile, email:d.email, clinicName:esc(d.clinicName||''), clinicAddress:esc(d.clinicAddress||''), clinicPhone:d.clinicPhone, clinicEmail:d.clinicEmail, photoDataUrl:d.photoDataUrl, logoDataUrl:d.logoDataUrl, subscription,
        schedule:{slotMinutes:s.slot,maxPerDay:s.maxDay,maxPerSlot:1,days,blocks:[]}, payMethods:{upi:{enabled:s.online,upiId:''},card:{enabled:false},netbanking:{enabled:false},cash:{enabled:s.cash}} });
      ui.wiz=null; ui.saDoctorId=res.doctor.id; renderSuperadmin(); showDoctorCreated(res.doctor,res.tempPassword);
    }catch(e){ btn.disabled=false; btn.textContent='Create Doctor'; toast(errMsg(e)); }
  };
}
function showDoctorCreated(d,tempPw){
  const text=credentialsText(d,tempPw);
  openModal(`<div class="pay-success"><div class="tick">${ICONS.check}</div><h3>Doctor created successfully</h3><div class="sub">${d.name} ka account taiyaar hai.</div></div>
    <div class="kv-list mt"><div class="r"><span>Login ID</span><span class="mono">${d.loginId}</span></div><div class="r"><span>Temporary password</span><span class="mono">${tempPw}</span></div></div>
    <div class="banner warn mt">Password sirf ab dikh raha hai — share kar lein.</div>
    <div class="modal-actions" style="flex-direction:column;gap:10px;"><button class="btn btn-coral btn-block" id="dc-dash">Open Doctor Dashboard</button><button class="btn btn-outline btn-block" id="dc-open">Open Booking Page</button><button class="btn btn-outline btn-block" id="dc-copy">Copy Booking Link</button><button class="btn btn-ghost btn-block" id="dc-share">Share Credentials</button></div>`);
  $('dc-dash').onclick=()=>{ closeModal(); viewAsDoctor(d); }; $('dc-open').onclick=()=>window.open(publicUrl(d.slug),'_blank'); $('dc-copy').onclick=()=>copyText(publicUrl(d.slug),ok=>toast(ok?'Link copied':'Copy nahi hua'));
  $('dc-share').onclick=()=>{ if(navigator.share) navigator.share({title:'Doctor login',text}).catch(()=>{}); else window.open(waLink(d.mobile,text),'_blank'); };
}

/* ---- Subscriptions ---- */
function subModalBase(d){ return d.subscription||{}; }
function openRecordPaymentModal(d){
  const plans=state.platform.settings.plans||[], s=subModalBase(d), cur=plans.find(p=>p.id===s.planId)||plans[0]||{};
  openModal(`<h3>Record payment — ${d.name}</h3><div class="sub">Subscription renew hogi aur "Paid" mark hogi.</div>
    <div class="field"><label>Plan</label><select id="rp-plan">${plans.map(p=>`<option value="${p.id}" ${p.id===cur.id?'selected':''}>${esc(p.name)} — ${money(p.price)}/${p.cycle}</option>`).join('')}</select></div>
    <div class="field-row"><div class="field"><label>Amount (₹)</label><input type="number" id="rp-amt" value="${cur.price||s.amount||0}"></div><div class="field"><label>Method</label><select id="rp-method"><option>UPI</option><option>Cash</option><option>Bank transfer</option><option>Card</option><option>Other</option></select></div></div>
    <div class="field-row"><div class="field"><label>Payment date</label><input type="date" id="rp-date" value="${todayStr()}"></div><div class="field"><label>Reference</label><input id="rp-ref"></div></div>
    <div class="field"><label>Note</label><input id="rp-note"></div><button class="btn btn-coral btn-block" id="rp-save">Save payment</button>`);
  $('rp-plan').onchange=()=>{ const p=planById($('rp-plan').value); if(p) $('rp-amt').value=p.price; };
  $('rp-save').onclick=async()=>{ recordSubPayment(d,{planId:$('rp-plan').value,amount:Number($('rp-amt').value),method:$('rp-method').value,date:$('rp-date').value,ref:$('rp-ref').value.trim(),note:$('rp-note').value.trim()}); if(d.active===false&&d.deactivatedReason==='Subscription expired'){ d.active=true; delete d.deactivatedReason; } await saveState(); closeModal(); renderSuperadmin(); toast('Payment recorded — valid till '+niceDate(d.subscription.expiry)); };
}
function openSubscriptionModal(d){
  const plans=state.platform.settings.plans||[], s=subModalBase(d), i=subInfo(d,state.platform.settings), hist=(s.history||[]).slice().reverse();
  openModal(`<h3>Subscription — ${d.name}</h3><div class="sub">${i.label}</div>
    <div class="field-row"><div class="field"><label>Plan</label><select id="sb-plan">${plans.map(p=>`<option value="${p.id}" ${p.id===s.planId?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div><div class="field"><label>Amount (₹)</label><input type="number" id="sb-amt" value="${s.amount||0}"></div></div>
    <div class="field-row"><div class="field"><label>Start date</label><input type="date" id="sb-start" value="${s.start||''}"></div><div class="field"><label>Expiry date</label><input type="date" id="sb-exp" value="${s.expiry||''}"></div></div>
    ${switchRow('sb-auto','Auto-renew reminder','Flag only — payment yahan manually record hota hai',s.autoRenew)}
    <button class="btn btn-coral btn-block mt" id="sb-save">Save subscription</button>
    <div class="section-label mt">Payment history</div>${hist.length===0?'<div class="muted">No payments yet</div>':hist.map(h=>`<div class="detail-row"><span class="k">${niceDate(h.date)} · ${h.method||''} ${h.ref?'· '+esc(h.ref):''}</span><span class="v">${money(h.amount)}</span></div>`).join('')}`,{wide:true});
  $('sb-save').onclick=async()=>{ const p=planById($('sb-plan').value)||{}; Object.assign(d.subscription=d.subscription||{},{planId:p.id||'',planName:p.name||s.planName,cycle:p.cycle||s.cycle,amount:Number($('sb-amt').value)||0,start:$('sb-start').value||null,expiry:$('sb-exp').value||null,autoRenew:$('sb-auto').checked}); await saveState(); closeModal(); renderSuperadmin(); toast('Subscription updated'); };
}
function saSubscriptions(v){
  const st=state.platform.settings, plans=st.plans||[], f=ui.saFilter, chips=[['all','All'],['paid','Paid'],['unpaid','Unpaid'],['expiring','Expiring Soon'],['expired','Expired'],['active','Active'],['inactive','Deactivated']].map(c=>({id:c[0],label:c[1]}));
  const list=liveDoctors().filter(d=>subFilterOk(d,f.chip)).sort((a,b)=>(a.createdAt||'').localeCompare(b.createdAt||''));
  const warn=liveDoctors().map(d=>({d,i:subInfo(d,st)})).filter(x=>x.i.bucket==='expiring'||x.i.bucket==='expired');
  v.innerHTML=`
    ${warn.length?`<div class="banner warn"><span>${warn.map(x=>`<b>${x.d.name}</b>: ${x.i.label}`).join(' · ')}</span></div>`:''}
    <div class="card"><div class="section-label">Plans (editable — nothing is hardcoded)</div>
      <div id="plan-list">${plans.map((p,ix)=>`<div class="field-row" style="align-items:end;" data-plan="${ix}"><div class="field"><label>Name</label><input data-f="name" value="${esc(p.name)}"></div><div class="field"><label>Price (₹)</label><input type="number" data-f="price" value="${p.price}"></div><div class="field"><label>Cycle</label><select data-f="cycle">${Object.keys(CYCLE_DAYS).map(c=>`<option ${c===p.cycle?'selected':''}>${c}</option>`).join('')}</select></div><div class="field"><label>Features</label><input data-f="features" value="${esc(p.features||'')}"></div><div class="field" style="flex:none;"><button class="btn btn-danger btn-sm" data-delplan="${ix}">${ICONS.trash}</button></div></div>`).join('')}</div>
      <div class="row gap8"><button class="btn btn-outline btn-sm" id="plan-add">${ICONS.plus} Add plan</button><button class="btn btn-coral btn-sm" id="plan-save">Save plans</button></div></div>
    ${chipsHtml(chips,f.chip,'data-chip')}
    ${list.length===0?`<div class="card">${emptyBox('Is filter mein koi doctor nahi.','card')}</div>`:`<div class="tscroll"><table class="rtable cards"><thead><tr><th>Doctor</th><th>Plan</th><th>Amount</th><th>Start</th><th>Expiry</th><th>Status</th><th>Days left</th><th>Auto-renew</th><th>Last payment</th><th>Next payment</th><th></th></tr></thead><tbody>
    ${list.map(d=>{ const i=subInfo(d,st), s=d.subscription||{}, last=(s.history||[]).slice(-1)[0]; return `<tr><td data-l="Doctor"><b>${d.name}</b> ${d.active===false?'<span class="status-badge st-inactive">Inactive</span>':''}</td><td data-l="Plan">${i.plan}</td><td data-l="Amount">${money(i.amount)}</td><td data-l="Start">${i.start?niceDate(i.start):'—'}</td><td data-l="Expiry">${i.expiry?niceDate(i.expiry):'—'}</td><td data-l="Status">${subBadge(i)}</td>
      <td data-l="Days left" ${i.bucket==='expiring'||i.bucket==='expired'?'style="color:var(--red);font-weight:700;"':''}>${i.days==null?'—':(i.days<0?'Expired':i.days+' d')}</td><td data-l="Auto-renew">${s.autoRenew?'On':'Off'}</td><td data-l="Last payment">${last?niceDate(last.date)+' · '+money(last.amount):'—'}</td><td data-l="Next payment">${i.expiry?niceDate(addDays(i.expiry,1)):'—'}</td>
      <td class="row gap8" style="flex-wrap:nowrap;"><button class="btn btn-coral btn-sm" data-pay="${d.id}">Record payment</button><button class="btn btn-outline btn-sm" data-sub="${d.id}">Manage</button></td></tr>`; }).join('')}</tbody></table></div>`}`;
  v.querySelectorAll('[data-chip]').forEach(b=>b.onclick=()=>{ f.chip=b.dataset.chip; renderSuperadmin(); });
  v.querySelectorAll('[data-pay]').forEach(b=>b.onclick=()=>openRecordPaymentModal(docById(b.dataset.pay))); v.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>openSubscriptionModal(docById(b.dataset.sub)));
  const readPlans=()=>[...v.querySelectorAll('[data-plan]')].map((row,ix)=>{ const g=k=>row.querySelector(`[data-f=${k}]`).value; return { id:plans[ix]&&plans[ix].id||slugify(g('name'))+'-'+uid().slice(0,3), name:g('name').trim(), price:Number(g('price'))||0, cycle:g('cycle'), features:g('features').trim() }; }).filter(p=>p.name);
  $('plan-add').onclick=()=>{ st.plans=readPlans().concat({id:'plan-'+uid().slice(0,4),name:'New plan',price:0,cycle:'monthly',features:''}); renderSuperadmin(); };
  v.querySelectorAll('[data-delplan]').forEach(b=>b.onclick=()=>{ const cur=readPlans(); cur.splice(Number(b.dataset.delplan),1); st.plans=cur; renderSuperadmin(); });
  $('plan-save').onclick=async()=>{ st.plans=readPlans(); try{ await savePlatform(); toast('Plans saved'); renderSuperadmin(); }catch(e){ toast(errMsg(e)); } };
}
function saPayments(v){
  const rows=subHistoryAll(), total=rows.reduce((s,h)=>s+(Number(h.amount)||0),0);
  v.innerHTML=`<div class="kpis">${kpi('Subscription revenue',money(total))}${kpi('Payments recorded',rows.length)}${kpi('Patient payments processed (all clinics)',money(platformStats().patientPay))}</div>
    <div class="tools"><button class="btn btn-outline btn-sm" id="pp-csv">Export CSV</button></div>
    ${rows.length===0?`<div class="card">${emptyBox('Abhi koi subscription payment record nahi hui.','money')}</div>`:`<div class="tscroll"><table class="rtable cards"><thead><tr><th>Date</th><th>Doctor</th><th>Plan</th><th>Amount</th><th>Method</th><th>Reference</th><th>Valid till</th></tr></thead><tbody>${rows.map(h=>`<tr><td data-l="Date">${niceDate(h.date)}</td><td data-l="Doctor">${h.doctor.name}</td><td data-l="Plan">${esc(h.planName||'')}</td><td data-l="Amount">${money(h.amount)}</td><td data-l="Method">${h.method||''}</td><td data-l="Reference">${esc(h.ref||'—')}</td><td data-l="Valid till">${h.to?niceDate(h.to):'—'}</td></tr>`).join('')}</tbody></table></div>`}`;
  $('pp-csv').onclick=()=>downloadCsv('subscription-payments.csv',[['Date','Doctor','Plan','Amount','Method','Reference','Valid till']].concat(rows.map(h=>[h.date,h.doctor.name,h.planName,h.amount,h.method,h.ref,h.to])));
}
function saAppointments(v){
  const f=ui.saApptF||(ui.saApptF={range:'7',doctor:'',status:''}), today=todayStr();
  let rows=state.appointments.filter(a=>(!f.doctor||a.doctorId===f.doctor)&&(!f.status||a.status===f.status)&&(f.range==='all'||(f.range==='today'?a.date===today:f.range==='7'?(a.date>=addDays(today,-7)&&a.date<=addDays(today,7)):a.date.startsWith(today.slice(0,7))))).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
  v.innerHTML=`<div class="tools"><select id="af-range"><option value="today" ${f.range==='today'?'selected':''}>Today</option><option value="7" ${f.range==='7'?'selected':''}>±7 days</option><option value="month" ${f.range==='month'?'selected':''}>This month</option><option value="all" ${f.range==='all'?'selected':''}>All</option></select>
    <select id="af-doc"><option value="">All doctors</option>${liveDoctors().map(d=>`<option value="${d.id}" ${f.doctor===d.id?'selected':''}>${d.name}</option>`).join('')}</select>
    <select id="af-st"><option value="">All statuses</option>${Object.keys(APPT_STATUS).map(s=>`<option value="${s}" ${f.status===s?'selected':''}>${APPT_STATUS[s].label}</option>`).join('')}</select><span class="muted">${rows.length} appointment(s)</span></div>
    ${rows.length===0?`<div class="card">${emptyBox('Koi appointment nahi.','calendar')}</div>`:`<div class="tscroll"><table class="rtable cards"><thead><tr><th>Date</th><th>Time</th><th>Token</th><th>Doctor</th><th>Patient</th><th>Mobile</th><th>Status</th></tr></thead><tbody>${rows.slice(0,300).map(a=>{ const d=docById(a.doctorId)||{name:'—'}; return `<tr><td data-l="Date">${niceDate(a.date)}</td><td data-l="Time">${fmt12(a.time)}</td><td data-l="Token">${tokenLabel(a.tokenNo)}</td><td data-l="Doctor">${d.name}</td><td data-l="Patient">${a.patientName}</td><td data-l="Mobile">${maskPhone(a.patientPhone)}</td><td data-l="Status">${statusBadge(a.status)}</td></tr>`; }).join('')}</tbody></table></div>`}`;
  $('af-range').onchange=e=>{ f.range=e.target.value; renderSuperadmin(); }; $('af-doc').onchange=e=>{ f.doctor=e.target.value; renderSuperadmin(); }; $('af-st').onchange=e=>{ f.status=e.target.value; renderSuperadmin(); };
}
function saPatients(v){
  const map={}; state.appointments.forEach(a=>{ const k=a.doctorId+'|'+a.patientPhone; const m=map[k]||(map[k]={doctorId:a.doctorId,name:a.patientName,phone:a.patientPhone,visits:0,last:''}); m.visits++; if(a.date>m.last) m.last=a.date; });
  const q=(ui.saPq||'').toLowerCase(), rows=Object.values(map).filter(r=>!q||r.name.toLowerCase().includes(q)||(docById(r.doctorId)||{name:''}).name.toLowerCase().includes(q)).sort((a,b)=>b.last.localeCompare(a.last));
  const per=liveDoctors().map(d=>({d,n:rows.filter(r=>r.doctorId===d.id).length}));
  v.innerHTML=`<div class="banner ok"><span>Privacy: patient mobile numbers yahan masked hain. Poori detail sirf us doctor ke apne dashboard mein hoti hai.</span></div>
    <div class="kpis">${kpi('Total patients',Object.keys(map).length)}${per.slice(0,3).map(p=>kpi(p.d.name,p.n,'patients')).join('')}</div>
    <div class="tools"><input type="search" id="sp-q" class="grow" placeholder="Search patient or doctor…" value="${esc(ui.saPq||'')}"></div>
    ${rows.length===0?`<div class="card">${emptyBox('Koi patient nahi.','users')}</div>`:`<div class="tscroll"><table class="rtable cards"><thead><tr><th>Patient</th><th>Mobile</th><th>Doctor</th><th>Visits</th><th>Last visit</th></tr></thead><tbody>${rows.slice(0,300).map(r=>`<tr><td data-l="Patient">${r.name}</td><td data-l="Mobile">${maskPhone(r.phone)}</td><td data-l="Doctor">${(docById(r.doctorId)||{name:'—'}).name}</td><td data-l="Visits">${r.visits}</td><td data-l="Last visit">${niceDate(r.last)}</td></tr>`).join('')}</tbody></table></div>`}`;
  $('sp-q').addEventListener('input',e=>{ ui.saPq=e.target.value.trim(); clearTimeout(saPatients._t); saPatients._t=setTimeout(()=>{ renderSuperadmin(); const el=$('sp-q'); if(el){ el.focus(); el.setSelectionRange(el.value.length,el.value.length); } },250); });
}
function saReports(v){
  const s=platformStats(), top=liveDoctors().map(d=>({label:d.name.replace('Dr. ',''),value:state.appointments.filter(a=>a.doctorId===d.id&&a.status!=='cancelled').length})).sort((a,b)=>b.value-a.value).slice(0,6);
  v.innerHTML=`<div class="kpis">${kpi('Appointments (all time)',s.appts)}${kpi('Today',s.today)}${kpi('Subscription revenue',money(s.revenue))}${kpi('Patient payments recorded',money(s.patientPay))}</div>
    <div class="card"><div class="section-label">Appointments — last 30 days</div>${barChartHtml(seriesDaily(30).filter((_,i)=>i%2===0),{color:'teal'})}</div>
    <div class="card mt"><div class="section-label">Subscription revenue — last 6 months</div>${barChartHtml(seriesMonthlyRevenue(),{prefix:'₹',color:'mint'})}</div>
    <div class="card mt"><div class="section-label">Top doctors by appointments</div>${top.length?barChartHtml(top):emptyBox('No data yet','chart')}</div>`;
}
function saSettings(v){
  const st=state.platform.settings, pub=state.platform.public;
  v.innerHTML=`<div class="card" style="max-width:640px;"><div class="section-label">Subscription policy</div>
    ${switchRow('ps-auto','Auto-deactivate doctors when subscription expires','Off by default. When on, expired doctors are deactivated the next time SuperAdmin opens the panel.',st.autoDeactivateOnExpiry)}
    ${switchRow('ps-block','Block online booking when subscription expires','Booking page shows "unavailable" (QR keeps working, but no bookings).',pub.blockBookingOnExpiry)}
    <div class="field mt"><label>Expiry warning (days before)</label><input type="number" id="ps-warn" value="${st.expiryWarnDays||7}"></div><button class="btn btn-coral" id="ps-save">Save policy</button></div>
    <div class="card mt" style="max-width:640px;"><div class="section-label">Change my password</div>
    <div class="field"><label>Current password</label><input type="password" id="pw-cur" autocomplete="current-password"></div><div class="field"><label>New password (min 8)</label><input type="password" id="pw-new" autocomplete="new-password"></div><button class="btn btn-outline" id="pw-go">Update password</button></div>
    ${!FIREBASE_MODE?`<div class="card mt" style="max-width:640px;"><div class="section-label">Demo tools</div><div class="row gap8"><button class="btn btn-outline btn-sm" id="dm-seed">Load sample doctors</button><button class="btn btn-danger btn-sm" id="dm-reset">Reset ALL demo data</button></div></div>`:''}`;
  $('ps-save').onclick=async()=>{ st.autoDeactivateOnExpiry=$('ps-auto').checked; st.expiryWarnDays=Number($('ps-warn').value)||7; pub.blockBookingOnExpiry=$('ps-block').checked; try{ await savePlatform(); applyExpiryPolicy(); toast('Policy saved'); }catch(e){ toast(errMsg(e)); } };
  $('pw-go').onclick=async()=>{ const n=$('pw-new').value; if(n.length<8){ toast('Naya password kam se kam 8 characters ka ho'); return; } try{ await Backend.changePassword($('pw-cur').value,n); toast('Password updated'); $('pw-cur').value=''; $('pw-new').value=''; }catch(e){ toast(errMsg(e)); } };
  const sd=$('dm-seed'); if(sd) sd.onclick=seedSampleDoctors;
  const rs=$('dm-reset'); if(rs) rs.onclick=()=>{ if(confirm('Saara demo data (doctors, appointments, accounts) delete ho jayega. Pakka?')){ localStorage.removeItem(DEMO_KEY); localStorage.removeItem(DEMO_ACC); sessionStorage.removeItem(DEMO_SESS); location.hash=''; location.reload(); } };
}
async function seedSampleDoctors(){
  const list=[['Dr. Anjali Mehta','General Physician',12,500,'9800000001','anjali@example.com','Anjali Family Clinic'],['Dr. Rakesh Nair','Pediatrician',9,600,'9800000002','rakesh@example.com','Little Steps Clinic'],['Dr. Sneha Iyer','Dermatologist',7,800,'9800000003','sneha@example.com','Glow Skin Clinic']];
  const out=[];
  for(const x of list){ try{ const plan=(state.platform.settings.plans||[])[out.length%3]||{}; const r=await createDoctor({name:x[0],spec:x[1],exp:x[2],fee:x[3],mobile:x[4],email:x[5],clinicName:x[6],clinicAddress:'MG Road, Bengaluru',subscription:{planId:plan.id,planName:plan.name,amount:plan.price,cycle:plan.cycle,status:out.length===2?'unpaid':'paid',start:todayStr(),expiry:out.length===2?'':addDays(todayStr(),out.length===1?5:30),history:[]}}); out.push(r); }catch(e){ toast(errMsg(e)); } }
  out.forEach(r=>{ if(r.doctor.subscription.status==='paid') r.doctor.subscription.history.push({id:uid(),date:todayStr(),amount:r.doctor.subscription.amount,method:'UPI',ref:'SAMPLE',planName:r.doctor.subscription.planName,from:todayStr(),to:r.doctor.subscription.expiry}); });
  await saveState(); renderSuperadmin();
  if(out.length) openModal(`<h3>Sample doctors created</h3><div class="sub">Demo mode: har doctor ka temporary password neeche hai (sirf abhi dikhega).</div><div class="kv-list mt">${out.map(r=>`<div class="r"><span>${r.doctor.loginId}</span><span class="mono">${r.tempPassword}</span></div>`).join('')}</div>`);
}

/* ================= DOCTOR APP: helpers, shell, dashboard, queue, appointments ================= */
function myAppts(doc){ return state.appointments.filter(a=>a.doctorId===doc.id); }
function syncBaselineItem(coll,x){ if(FIREBASE_MODE) baseline.coll[coll][x.id]={json:jsonOf(x),doctorId:x.doctorId}; }
function payOf(a){ return state.payments.find(p=>p.apptId===a.id); }
const PAY_LABEL={success:'Paid',pending:'Pending',refunded:'Refunded',cancelled:'Cancelled'};
const PAY_CLS={success:'paid',pending:'pending',refunded:'refunded',cancelled:'cancelled'};
function payBadge(p){ return `<span class="status-badge st-${PAY_CLS[p]||'pending'}">${PAY_LABEL[p]||p}</span>`; }

function ensureDerived(doc){
  let changed=false; const havePay=new Set(state.payments.filter(p=>p.doctorId===doc.id).map(p=>p.apptId));
  myAppts(doc).forEach(a=>{ if(a.status!=='cancelled'&&!havePay.has(a.id)){ state.payments.push({id:uid(),doctorId:doc.id,apptId:a.id,patientName:a.patientName,patientPhone:a.patientPhone,amount:a.fee||doc.fee,method:a.paymentMethod||'cash',status:a.paymentStatus==='paid'?'success':'pending',date:a.createdAt||new Date().toISOString(),ref:'',notes:''}); changed=true; } });
  const havePt=new Set(state.patients.filter(p=>p.doctorId===doc.id).map(p=>p.phone));
  const firsts={}; myAppts(doc).forEach(a=>{ const f=firsts[a.patientPhone]; if(!f||(a.createdAt||a.date)<(f.createdAt||f.date)) firsts[a.patientPhone]=a; });
  state.histories.filter(h=>h.doctorId===doc.id).forEach(h=>{ if(!firsts[h.patientPhone]) firsts[h.patientPhone]={patientName:h.patientName,patientPhone:h.patientPhone,patientAge:h.patientAge,patientGender:h.patientGender,createdAt:h.date+'T00:00:00'}; });
  let count=state.patients.filter(p=>p.doctorId===doc.id).length;
  Object.values(firsts).sort((a,b)=>(a.createdAt||a.date||'').localeCompare(b.createdAt||b.date||'')).forEach(a=>{
    if(!a.patientPhone||havePt.has(a.patientPhone)) return; count++;
    state.patients.push({id:uid(),doctorId:doc.id,pid:'P'+String(count).padStart(4,'0'),phone:a.patientPhone,name:a.patientName,age:a.patientAge||'',gender:a.patientGender||'',notes:[],createdAt:a.createdAt||new Date().toISOString()}); changed=true; });
  if(changed) saveState();
}
function expireOldAppointments(doc){
  const today=todayStr(); let ch=false;
  state.appointments.forEach(a=>{ if(a.doctorId===doc.id&&(a.status==='booked'||a.status==='confirmed')&&a.date<today){ a.status='no_show'; ch=true; } });
  if(ch) saveState();
}
function docStats(doctorId){
  const appts=state.appointments.filter(a=>a.doctorId===doctorId), earnings=state.payments.filter(p=>p.doctorId===doctorId&&p.status==='success').reduce((s,p)=>s+p.amount,0);
  return { upcoming:appts.filter(a=>isOpenStatus(a.status)).length, total:appts.length, earnings, patients:new Set(appts.map(a=>a.patientPhone)).size };
}
function docFinance(doctorId, from, to){
  const inR=d=>(!from||d.slice(0,10)>=from)&&(!to||d.slice(0,10)<=to);
  const patientIncome=state.payments.filter(p=>p.doctorId===doctorId&&p.status==='success'&&inR(p.paidAt||p.date)).reduce((s,p)=>s+p.amount,0);
  const led=state.ledger.filter(l=>l.doctorId===doctorId&&inR(l.date));
  const manual=led.filter(l=>l.type==='income').reduce((s,l)=>s+l.amount,0), expense=led.filter(l=>l.type==='expense').reduce((s,l)=>s+l.amount,0);
  return { patientIncome, income:patientIncome+manual, expense, profit:patientIncome+manual-expense };
}
function completeAppointment(a){
  a.status='completed'; a.completedAt=new Date().toISOString();
  if(!state.histories.some(h=>h.apptId===a.id)) state.histories.push({ id:uid(), doctorId:a.doctorId, apptId:a.id, patientName:a.patientName, patientPhone:a.patientPhone, patientAge:a.patientAge||'', patientGender:a.patientGender||'', date:a.date, diagnosis:'General checkup', prescription:'', vitals:'', advice:'', notes:a.reason||'Visit completed.' });
  Backend.markSlotCompleted(a.doctorId,a.slotKey);
}
/* Keeps doctors/{did}/counters/{today}.currentToken in sync with whoever is in_consultation right now,
   so the patient-facing appointment page can show a running-token indicator without any login. */
function syncCurrentToken(doc){
  const q=queueParts(doc);
  Backend.setCurrentToken(doc.id,todayStr(),q.cur?q.cur.tokenNo:null);
}
function markApptPaid(a, method, ref){
  a.paymentStatus='paid'; a.paymentMethod=method||a.paymentMethod||'cash'; let p=payOf(a);
  if(!p){ p={id:uid(),doctorId:a.doctorId,apptId:a.id,patientName:a.patientName,patientPhone:a.patientPhone,amount:a.fee,method:'cash',status:'pending',date:a.createdAt||new Date().toISOString(),ref:'',notes:''}; state.payments.push(p); }
  p.status='success'; p.method=method||p.method; p.ref=ref||p.ref||''; p.paidAt=new Date().toISOString();
}
function markApptUnpaid(a){ a.paymentStatus='pending'; const p=payOf(a); if(p){ p.status='pending'; delete p.paidAt; } }
async function staffCancel(doc,a){ try{ await Backend.cancelAppointment(doc.id,a.id,'staff'); }catch(e){ toast(errMsg(e)); return false; } a.status='cancelled'; const p=payOf(a); if(p&&p.status==='pending') p.status='cancelled'; syncBaselineItem('appointments',a); await saveState(); notifyIfWaitlist(doc,a.date); Notify.trigger('cancellation',doc,a); return true; }

/* ---- queue ---- */
function queueParts(doc){
  const t=todayStr(), list=myAppts(doc).filter(a=>a.date===t), cur=list.find(a=>a.status==='in_consultation');
  const waiting=list.filter(a=>WAITING_STATUSES.includes(a.status)).sort((a,b)=>(a.skippedAt?1:0)-(b.skippedAt?1:0)||(a.skippedAt?(a.skippedAt.localeCompare(b.skippedAt)):(a.tokenNo-b.tokenNo)||a.time.localeCompare(b.time)));
  return { list, cur, waiting };
}
function queueAction(doc, act){
  const q=queueParts(doc); let msg='';
  if(act==='next'){ if(q.cur){ toast('Pehle current patient ko Complete ya Skip karein'); return; } const n=q.waiting[0]; if(!n){ toast('Queue mein koi patient nahi'); return; } n.status='in_consultation'; n.calledAt=new Date().toISOString(); delete n.skippedAt; msg='Calling '+tokenLabel(n.tokenNo)+' — '+unesc(n.patientName); announce(n); }
  if(act==='skip'){ const n=q.cur||q.waiting[0]; if(!n){ toast('Skip karne ke liye koi patient nahi'); return; } n.status=n.arrivedAt?'arrived':'booked'; n.skippedAt=new Date().toISOString(); n.skipCount=(n.skipCount||0)+1; msg=tokenLabel(n.tokenNo)+' skipped — queue mein peeche gaya'; }
  if(act==='recall'){ if(q.cur){ q.cur.recalledAt=new Date().toISOString(); announce(q.cur); msg='Recalling '+tokenLabel(q.cur.tokenNo); } else { const sk=q.waiting.filter(a=>a.skippedAt).sort((a,b)=>b.skippedAt.localeCompare(a.skippedAt))[0]; if(!sk){ toast('Recall karne ke liye koi skipped patient nahi'); return; } sk.status='in_consultation'; sk.calledAt=new Date().toISOString(); delete sk.skippedAt; announce(sk); msg='Recalled '+tokenLabel(sk.tokenNo)+' — '+unesc(sk.patientName); } }
  if(act==='done'){ if(!q.cur){ toast('Abhi koi patient consultation mein nahi'); return; } completeAppointment(q.cur); msg=tokenLabel(q.cur.tokenNo)+' completed'; }
  saveState(); syncCurrentToken(doc); renderAdmin(); toast(msg);
}
function announce(a){ try{ if(window.speechSynthesis){ const u=new SpeechSynthesisUtterance('Token number '+a.tokenNo+', '+unesc(a.patientName)); speechSynthesis.cancel(); speechSynthesis.speak(u); } }catch(e){} }
function queueCardHtml(doc){
  const q=queueParts(doc);
  return `<div class="qcard"><div class="qrow"><div><div class="lbl">Current token</div><div class="big">${q.cur?tokenLabel(q.cur.tokenNo):'—'}</div>${q.cur?`<div style="margin-top:4px;font-weight:600;">${q.cur.patientName}</div>`:''}</div>
    <div style="flex:1;min-width:150px;"><div class="lbl">Next in queue</div><div class="qnext">${q.waiting.slice(0,4).map(a=>`<span>${tokenLabel(a.tokenNo)}${a.skippedAt?' ↺':''}</span>`).join('')||'<span>Queue empty</span>'}</div></div></div>
    <div class="row gap8"><button class="btn pri" data-q="next">Call Next Patient</button><button class="btn" data-q="skip">Skip</button><button class="btn" data-q="recall">Recall</button><button class="btn" data-q="done">Mark Completed</button><button class="btn" style="background:var(--red);color:#fff;" id="qc-emergency">🚨 Emergency</button><button class="btn" id="qc-extra">+ Add Extra Slot</button></div></div>`;
}
function bindQueue(root,doc){
  root.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>queueAction(doc,b.dataset.q));
  const em=root.querySelector('#qc-emergency'); if(em) em.onclick=()=>openEmergencyModal(doc);
  const ex=root.querySelector('#qc-extra'); if(ex) ex.onclick=()=>openExtraSlotsModal(doc,todayStr());
}

/* ---- emergency insertion (fractional token placed between two neighbours; no time-slot needed) ---- */
function openEmergencyModal(doc){
  const q=queueParts(doc), seq=(q.cur?[q.cur]:[]).concat(q.waiting).sort((a,b)=>a.tokenNo-b.tokenNo);
  const opts=[{label:'Sabse aage (queue ke shuru mein)',prev:null,next:seq[0]||null}]
    .concat(seq.map((a,i)=>({label:'Iske baad — '+tokenLabel(a.tokenNo)+' '+unesc(a.patientName),prev:a,next:seq[i+1]||null})));
  openModal(`<h3>🚨 Emergency patient</h3><div class="sub">Ye patient queue mein turant beech mein daal diya jayega, kisi time-slot ki zaroorat nahi.</div>
    <div class="field"><label>Kahan insert karein</label><select id="em-pos">${opts.map((o,i)=>`<option value="${i}">${o.label}</option>`).join('')}</select></div>
    <div class="field-row"><div class="field"><label>Patient Name</label><input id="em-name"></div><div class="field"><label>Mobile</label><input id="em-phone" inputmode="numeric"></div></div>
    <div class="field-row"><div class="field"><label>Reason (optional)</label><input id="em-reason" placeholder="e.g. Chest pain"></div><div class="field"><label>Emergency Fee (₹)</label><input type="number" id="em-fee" value="${doc.emFee!=null?doc.emFee:800}"></div></div>
    <button class="btn btn-coral btn-block" id="em-go">Insert Emergency Patient</button>`);
  $('em-go').onclick=async()=>{
    const name=$('em-name').value.trim(), phone=$('em-phone').value; if(!name||!validPhone(phone)){ toast('Naam aur sahi mobile number daalein'); return; }
    const o=opts[Number($('em-pos').value)];
    const prevTok=o.prev?o.prev.tokenNo:null, nextTok=o.next?o.next.tokenNo:null;
    const tokenNo = prevTok==null ? (nextTok!=null?nextTok-0.5:0.5) : (nextTok!=null?(prevTok+nextTok)/2:prevTok+0.5);
    const now=new Date();
    const emFee=Number($('em-fee').value); const feeVal=Number.isFinite(emFee)&&emFee>=0?emFee:(doc.emFee!=null?doc.emFee:800);
    const appt=escDeep({ id:uid()+uid(), doctorId:doc.id, source:'manual', status:'booked', date:todayStr(), time:fromMin(now.getHours()*60+now.getMinutes()), tokenNo, fee:feeVal, paymentStatus:'pending', patientName:name, patientPhone:normPhone(phone), patientPhoneE164:e164(phone), reason:$('em-reason').value.trim()||'Emergency', emergency:true, createdAt:now.toISOString(), notifyDoctor:false });
    state.appointments.push(appt); await saveState(); closeModal(); renderAdmin(); toast('Emergency patient queue mein daal diya gaya');
  };
}

/* ---- extra slots (staff adds N more slots beyond the normal schedule, for a busy day) ---- */
function openExtraSlotsModal(doc,date){
  const sch=docSchedule(doc), cur=(sch.extras||{})[date]||0;
  openModal(`<h3>+ Add Extra Slots</h3><div class="sub">${niceDate(date)} ke liye normal schedule ke baad kitne extra slot jodne hain? Ye patient booking page par bhi turant dikhenge.</div>
    <div class="field"><label>Extra slots</label><input type="number" id="ex-n" min="1" value="5"></div>
    ${cur?`<div class="muted">Is din pehle se ${cur} extra slot jode ja chuke hain.</div>`:''}
    <button class="btn btn-coral btn-block" id="ex-go">Add Extra Slots</button>`);
  $('ex-go').onclick=async()=>{
    const n=Math.max(1,Number($('ex-n').value)||0); if(!n){ toast('Sahi number daalein'); return; }
    const s=docSchedule(doc); s.extras=Object.assign({},s.extras||{}); s.extras[date]=(s.extras[date]||0)+n; doc.schedule=s;
    await saveState(); closeModal(); renderAdmin(); toast(n+' extra slot(s) jud gaye — '+niceDate(date));
  };
}

/* ---- shell ---- */
function renderAdmin(){
  const doc=docById(curDoctorId()); if(!doc){ location.hash=session.role==='superadmin'?'#/superadmin':'#/login'; return; }
  if(session.role==='doctor'&&session.mustChange){ renderForceChange(); return; }
  if(session.role==='doctor'&&doc.active===false){ session.blocked='inactive'; Backend.signOut().then(()=>{ location.hash='#/login'; enterRoute(); }); return; }
  if(ui.previewMode){ renderPublicInline(doc,true); return; }
  ensureDerived(doc); expireOldAppointments(doc);
  const tab=ADMIN_NAV.find(n=>n.id===ui.adminTab)?ui.adminTab:'overview', nav=ADMIN_NAV.find(n=>n.id===tab), asSA=session.role==='superadmin';
  const alertCount=myAppts(doc).filter(a=>a.notifyDoctor).length;
  const view=staffShell({ nav:ADMIN_NAV, active:tab, title:tab==='overview'?'Dashboard':nav.label, mark:initials(doc.name), sub:doc.spec, whoName:unesc(doc.name), whoSub:esc(doc.clinicName||''),
    onNav:id=>{ ui.adminTab=id; ui.selectedPatientPhone=null; renderAdmin(); },
    sideExtra:asSA?`<button class="nb" id="back-sa">${ICONS.back}<span>Back to SuperAdmin</span></button>`:'',
    actions:`<button class="btn btn-outline btn-sm" id="doc-alerts" style="position:relative;" title="New bookings">🔔${alertCount>0?`<span style="position:absolute;top:-7px;right:-7px;background:var(--coral);color:#fff;border-radius:100px;font-size:10px;font-weight:700;padding:1px 5px;">${alertCount}</span>`:''}</button><button class="btn btn-outline btn-sm" id="preview-pub">${ICONS.link} Preview</button>${asSA?`<button class="btn btn-ghost btn-sm" id="back-sa2">${ICONS.back} SuperAdmin</button>`:''}` });
  $('doc-alerts').onclick=()=>{ ui.adminTab='appointments'; ui.apptFilter={range:'today',status:'',q:'',date:''}; renderAdmin(); };
  $('preview-pub').onclick=()=>{ ui.previewMode=true; ui.booking={date:null,time:null}; renderAdmin(); };
  ['back-sa','back-sa2'].forEach(id=>{ const b=$(id); if(b) b.onclick=()=>{ ui.viewAsDoctorId=null; location.hash='#/superadmin'; }; });
  view.innerHTML=`<div id="av-${tab}"></div>`;
  const banner=subBannerHtml(doc); if(banner&&tab==='overview') view.insertAdjacentHTML('afterbegin',banner);
  ({overview:renderAdminOverview,appointments:renderAdminAppointments,patients:d=>ui.selectedPatientPhone?renderPatientDetail(d,ui.selectedPatientPhone):renderAdminPatients(d),schedule:renderAdminSchedule,payments:renderAdminPayments,finance:renderAdminFinance,analytics:renderAdminAnalytics,booking:renderAdminBooking,settings:renderAdminSettings})[tab](doc);
}
function subBannerHtml(doc){ const i=subInfo(doc,state.platform.settings); if(i.bucket==='expiring') return `<div class="banner warn">⏳ ${i.label}. Renewal ke liye platform admin se sampark karein.</div>`; if(i.bucket==='expired') return `<div class="banner bad">Subscription expire ho chuki hai (${i.label}). Kripya renew karwayein.</div>`; return ''; }

/* ---- dashboard ---- */
function renderAdminOverview(doc){
  const t=todayStr(), all=myAppts(doc), today=all.filter(a=>a.date===t&&a.status!=='cancelled'), q=queueParts(doc);
  const upcoming=all.filter(a=>a.date>t&&isOpenStatus(a.status)).length, done=all.filter(a=>a.date===t&&a.status==='completed').length, canc=all.filter(a=>a.date===t&&a.status==='cancelled').length;
  const rev=state.payments.filter(p=>p.doctorId===doc.id&&p.status==='success'&&(p.paidAt||p.date).slice(0,10)===t).reduce((s,p)=>s+p.amount,0);
  const pend=state.payments.filter(p=>p.doctorId===doc.id&&p.status==='pending').reduce((s,p)=>s+p.amount,0);
  const newPts=state.patients.filter(p=>p.doctorId===doc.id&&(p.createdAt||'').slice(0,10)>=addDays(t,-6)).length;
  const nxt=q.cur||q.waiting[0], firstStop=all.filter(a=>isOpenStatus(a.status)&&(a.date>t)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time))[0];
  document.getElementById('av-overview').innerHTML=`
    <div class="kpis">${kpi("Today's Appointments",today.length)}${kpi('Upcoming',upcoming,'after today')}${kpi('Completed',done,'today','var(--teal)')}${kpi('Cancelled',canc,'today')}${kpi("Today's Revenue",money(rev),'','var(--teal)')}${kpi('Pending Payments',money(pend),'','#96660E')}${kpi('New Patients',newPts,'last 7 days')}</div>
    <div class="grid-2 eq">
      <div class="card"><div class="section-label">Next patient</div>
        ${nxt?`<div style="font-family:'Fraunces',serif;font-size:24px;">${nxt.patientName}</div><div class="muted">${fmt12(nxt.time)} · Token ${tokenLabel(nxt.tokenNo)} ${q.cur&&nxt.id===q.cur.id?'· <b style="color:var(--teal)">In consultation</b>':''}</div>${nxt.reason?`<div class="muted" style="margin-top:4px;">${nxt.reason}</div>`:''}
        <div class="row gap8 mt"><button class="btn btn-outline btn-sm" id="np-view">View Patient</button>${q.cur&&nxt.id===q.cur.id?'':`<button class="btn btn-coral btn-sm" id="np-start">Start Consultation</button>`}<button class="btn btn-ghost btn-sm" id="np-done" ${q.cur&&nxt.id===q.cur.id?'':'disabled'}>Mark Completed</button></div>`
        :`<div class="muted">Aaj koi patient queue mein nahi.${firstStop?` Agli appointment: ${niceDate(firstStop.date)}, ${fmt12(firstStop.time)}.`:''}</div>`}</div>
      <div>${queueCardHtml(doc)}</div>
    </div>
    <div class="card mt"><div class="section-label">Quick actions</div><div class="row gap8"><button class="btn btn-coral btn-sm" id="qa-add">${ICONS.plus} Add appointment</button><button class="btn btn-outline btn-sm" id="qa-share">${ICONS.share} Share booking link</button><button class="btn btn-outline btn-sm" id="qa-qr">${ICONS.qr||ICONS.link} Clinic QR poster</button></div></div>`;
  bindQueue(document.getElementById('av-overview'),doc);
  const g=id=>document.getElementById(id);
  if(g('np-view')) g('np-view').onclick=()=>{ ui.adminTab='patients'; ui.selectedPatientPhone=nxt.patientPhone; renderAdmin(); };
  if(g('np-start')) g('np-start').onclick=()=>{ if(q.cur){ toast('Pehle current patient complete karein'); return; } nxt.status='in_consultation'; nxt.calledAt=new Date().toISOString(); delete nxt.skippedAt; saveState(); syncCurrentToken(doc); renderAdmin(); };
  if(g('np-done')) g('np-done').onclick=()=>queueAction(doc,'done');
  g('qa-add').onclick=()=>openManualAppointmentModal(doc); g('qa-share').onclick=()=>shareOrCopyLink(publicUrl(doc.slug),unesc(doc.name)+' — Book an Appointment','#/book/'+doc.slug); g('qa-qr').onclick=()=>{ ui.adminTab='booking'; renderAdmin(); };
}

/* ---- appointments ---- */
function apptRowHtml(a){
  const pay=a.paymentStatus==='paid'?payBadge('success'):payBadge('pending'), st=migrateStatus(a.status), open=isOpenStatus(st);
  const inQueueToday=a.date===todayStr() && WAITING_STATUSES.includes(st);
  let qBtns='';
  if(st==='in_consultation'){
    qBtns=`<button class="btn btn-ghost btn-sm" data-rowq="recall" data-id="${a.id}">Recall</button><button class="btn btn-outline btn-sm" data-rowq="skip" data-id="${a.id}">Skip</button>`;
  } else if(inQueueToday){
    qBtns=`<button class="btn pri btn-sm" data-rowq="call" data-id="${a.id}">Call</button><button class="btn btn-outline btn-sm" data-rowq="skip" data-id="${a.id}">Skip</button>`;
  }
  return `<div class="acard" data-open-appt="${a.id}"><div class="tk">${tokenLabel(a.tokenNo)}<small>${fmt12(a.time)}</small></div>
    <div class="mid"><b>${a.patientName}</b><span>${niceDate(a.date)} · ${a.patientPhone}${a.reason?' · '+a.reason:''}${a.bookedFor&&a.bookedFor.relation&&a.bookedFor.relation!=='Self'?' · for '+esc(a.bookedFor.relation):''}</span><div style="margin-top:5px;">${statusBadge(st)} ${pay}</div></div>
    <div class="acts" onclick="event.stopPropagation()">${qBtns}${open?`${st==='booked'?`<button class="btn btn-ghost btn-sm" data-ast="confirmed" data-id="${a.id}">Confirm</button>`:''}${st!=='arrived'&&st!=='in_consultation'?`<button class="btn btn-ghost btn-sm" data-ast="arrived" data-id="${a.id}">Arrived</button>`:''}${st==='in_consultation'?`<button class="btn btn-coral btn-sm" data-ast="completed" data-id="${a.id}">Complete</button>`:''}`:''}${a.paymentStatus!=='paid'&&st!=='cancelled'?`<button class="btn btn-outline btn-sm" data-ast="paid" data-id="${a.id}">Mark Paid</button>`:''}</div></div>`;
}
/* Row-level queue actions — same semantics as the queue card at the top
   (Call/Skip/Recall), but targeted at ONE specific patient's row so the
   doctor doesn't have to scroll up every time. */
function rowQueueAction(doc,a,act){
  if(!a) return;
  let msg='';
  if(act==='call'){
    if(a.status==='in_consultation') return;
    a.status='in_consultation'; a.calledAt=new Date().toISOString(); delete a.skippedAt; announce(a);
    msg='Calling '+tokenLabel(a.tokenNo)+' — '+unesc(a.patientName);
  } else if(act==='skip'){
    a.status=a.arrivedAt?'arrived':'booked'; a.skippedAt=new Date().toISOString(); a.skipCount=(a.skipCount||0)+1;
    msg=tokenLabel(a.tokenNo)+' skipped — queue mein peeche gaya';
  } else if(act==='recall'){
    if(a.status==='in_consultation'){ a.recalledAt=new Date().toISOString(); announce(a); msg='Recalling '+tokenLabel(a.tokenNo); }
    else { a.status='in_consultation'; a.calledAt=new Date().toISOString(); delete a.skippedAt; announce(a); msg='Recalled '+tokenLabel(a.tokenNo)+' — '+unesc(a.patientName); }
  }
  saveState(); syncCurrentToken(doc); renderAdmin(); toast(msg);
}
function filterAppts(doc){
  const f=ui.apptFilter, t=todayStr(), q=(f.q||'').toLowerCase();
  return myAppts(doc).filter(a=>{
    if(f.date&&a.date!==f.date) return false;
    if(!f.date){ if(f.range==='today'&&a.date!==t) return false; if(f.range==='upcoming'&&!(a.date>t)) return false; if(f.range==='past'&&!(a.date<t)) return false; }
    if(f.status==='payment_pending'){ if(!(a.paymentStatus!=='paid'&&a.status!=='cancelled')) return false; } else if(f.status&&migrateStatus(a.status)!==f.status) return false;
    if(q&&!(a.patientName.toLowerCase().includes(q)||String(a.patientPhone).includes(q)||apptCode(a.id).toLowerCase().includes(q))) return false; return true;
  }).sort((a,b)=>f.range==='past'?(b.date+b.time).localeCompare(a.date+a.time):(a.date+a.time).localeCompare(b.date+b.time));
}
function renderAdminAppointments(doc){
  const f=ui.apptFilter, view=ui.apptView||'list', hadAlerts=myAppts(doc).some(a=>a.notifyDoctor);
  if(hadAlerts){ myAppts(doc).forEach(a=>{ a.notifyDoctor=false; }); saveState(); }
  const list=filterAppts(doc), stOpts=Object.keys(APPT_STATUS).map(s=>`<option value="${s}" ${f.status===s?'selected':''}>${APPT_STATUS[s].label}</option>`).join('');
  const el=document.getElementById('av-appointments');
  el.innerHTML=`${queueCardHtml(doc)}
    <div class="tools"><div class="seg"><button data-view="list" class="${view==='list'?'on':''}">List</button><button data-view="slots" class="${view==='slots'?'on':''}">Day slots</button></div><span class="grow"></span><button class="btn btn-coral btn-sm" id="add-manual-appt">${ICONS.plus} Add Appointment</button></div>
    ${view==='slots'?daySlotsHtml(doc):`
    ${chipsHtml([{id:'today',label:'Today'},{id:'upcoming',label:'Upcoming'},{id:'past',label:'Past'},{id:'all',label:'All'}],f.date?'':f.range,'data-range')}
    <div class="tools"><input type="date" id="af-date" value="${f.date}"><select id="af-status"><option value="">All statuses</option>${stOpts}<option value="payment_pending" ${f.status==='payment_pending'?'selected':''}>Payment Pending</option></select><input type="search" id="af-q" class="grow" placeholder="Search patient / mobile / ID" value="${esc(f.q)}"></div>
    ${list.length===0?`<div class="card">${emptyBox('Is filter mein koi appointment nahi.','calendar')}</div>`:list.map(apptRowHtml).join('')}`}`;
  bindQueue(el,doc);
  el.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{ ui.apptView=b.dataset.view; renderAdmin(); });
  el.querySelectorAll('[data-range]').forEach(b=>b.onclick=()=>{ f.range=b.dataset.range; f.date=''; renderAdmin(); });
  const bind=(id,ev,fn)=>{ const x=document.getElementById(id); if(x) x.addEventListener(ev,fn); };
  bind('af-date','change',e=>{ f.date=e.target.value; renderAdmin(); }); bind('af-status','change',e=>{ f.status=e.target.value; renderAdmin(); });
  bind('af-q','input',e=>{ f.q=e.target.value; clearTimeout(renderAdminAppointments._t); renderAdminAppointments._t=setTimeout(()=>{ renderAdmin(); const x=document.getElementById('af-q'); if(x){ x.focus(); x.setSelectionRange(x.value.length,x.value.length); } },250); });
  document.getElementById('add-manual-appt').onclick=()=>openManualAppointmentModal(doc);
  el.querySelectorAll('[data-open-appt]').forEach(c=>c.onclick=()=>openAppointmentDetailModal(doc,state.appointments.find(x=>x.id===c.dataset.openAppt)));
  el.querySelectorAll('[data-ast]').forEach(b=>b.onclick=async()=>{ const a=state.appointments.find(x=>x.id===b.dataset.id), s=b.dataset.ast; await applyApptAction(doc,a,s); });
  el.querySelectorAll('[data-rowq]').forEach(b=>b.onclick=()=>{ const a=state.appointments.find(x=>x.id===b.dataset.id); rowQueueAction(doc,a,b.dataset.rowq); });
  bindDaySlots(el,doc);
}
async function applyApptAction(doc,a,s){
  if(s==='confirmed') a.status='confirmed';
  else if(s==='arrived'){ a.status='arrived'; a.arrivedAt=new Date().toISOString(); }
  else if(s==='in_consultation'){ a.status='in_consultation'; a.calledAt=new Date().toISOString(); }
  else if(s==='completed') completeAppointment(a);
  else if(s==='no_show') a.status='no_show';
  else if(s==='paid'){ openMarkPaidModal(doc,a); return; }
  else if(s==='cancelled'){ if(!(await staffCancel(doc,a))) return; syncCurrentToken(doc); renderAdmin(); toast('Appointment cancelled'); return; }
  await saveState(); syncCurrentToken(doc); renderAdmin();
}
function openMarkPaidModal(doc,a){
  openModal(`<h3>Mark payment received</h3><div class="sub">${a.patientName} · ${money(a.fee)}</div>
    <div class="field"><label>Method</label><select id="mp-m"><option value="cash">Cash</option><option value="upi">UPI</option><option value="card">Card</option><option value="other">Other</option></select></div><div class="field"><label>Reference (optional)</label><input id="mp-r"></div><button class="btn btn-coral btn-block" id="mp-go">Mark as Paid</button>`);
  $('mp-go').onclick=async()=>{ markApptPaid(a,$('mp-m').value,$('mp-r').value.trim()); await saveState(); closeModal(); renderAdmin(); toast('Payment marked as paid'); Notify.trigger('payment',doc,a); };
}
function daySlotsHtml(doc){
  if(!ui.scheduleDate) ui.scheduleDate=todayStr();
  const dates=[]; for(let i=0;i<14;i++) dates.push(addDays(todayStr(),i));
  const slots=adminSlotsForDate(doc,ui.scheduleDate), wl=state.waitlist.filter(w=>w.doctorId===doc.id&&w.date===ui.scheduleDate), blk=dayBlock(doc,ui.scheduleDate), tokenWise=!!docSchedule(doc).tokenWise;
  return `<div class="card"><div class="date-strip">${dates.map(ds=>`<button class="date-pill ${ds===ui.scheduleDate?'picked':''}" data-sched-date="${ds}"><div class="dow">${dow(ds)}</div><div class="dnum">${new Date(ds+'T00:00:00').getDate()}</div></button>`).join('')}</div>
    ${blk?`<div class="banner warn">${blk.label||'Doctor unavailable'} — slots band hain</div>`:''}
    ${slots.length===0?emptyBox('Is din visiting hours set nahi hain (Schedule tab dekhein).','calendar'):`<div class="sched-grid">${slots.map(s=>schedSlotTile(s,tokenWise)).join('')}</div>`}</div>
    ${wl.length?`<div class="card mt"><div class="section-label">Waitlist — ${niceDate(ui.scheduleDate)} (${wl.length})</div>${wl.map(w=>`<div class="appt-row"><div class="appt-info"><div class="nm">${w.patientName}</div><div class="ph">${w.patientPhone}</div></div><button class="btn btn-outline btn-sm" data-wl-book="${w.id}">Book slot</button><button class="btn btn-ghost btn-sm" data-wl-wa="${w.id}">WhatsApp</button><button class="btn btn-danger btn-sm" data-wl-remove="${w.id}">${ICONS.x}</button></div>`).join('')}</div>`:''}`;
}
function bindDaySlots(el,doc){
  el.querySelectorAll('[data-sched-date]').forEach(b=>b.onclick=()=>{ ui.scheduleDate=b.dataset.schedDate; renderAdmin(); });
  el.querySelectorAll('[data-slot-time]').forEach(t=>t.onclick=()=>{ const s=adminSlotsForDate(doc,ui.scheduleDate).find(x=>x.time===t.dataset.slotTime); if(s.appt) openAppointmentDetailModal(doc,s.appt); else openManualAppointmentModal(doc,ui.scheduleDate,s.time); });
  el.querySelectorAll('[data-wl-book]').forEach(b=>b.onclick=()=>{ const w=state.waitlist.find(x=>x.id===b.dataset.wlBook); if(w) openManualAppointmentModal(doc,w.date,null,w.patientName,w.patientPhone,w.id); });
  el.querySelectorAll('[data-wl-wa]').forEach(b=>b.onclick=()=>{ const w=state.waitlist.find(x=>x.id===b.dataset.wlWa); window.open(waLink(w.patientPhone,`Namaste ${unesc(w.patientName)}, ${unesc(doc.name)} ke yahaan ${niceDate(w.date)} ko slot khaali hua hai. Book karein: ${publicUrl(doc.slug)}`),'_blank'); });
  el.querySelectorAll('[data-wl-remove]').forEach(b=>b.onclick=()=>{ state.waitlist=state.waitlist.filter(x=>x.id!==b.dataset.wlRemove); saveState(); renderAdmin(); toast('Waitlist entry removed'); });
}
function adminSlotsForDate(doc,date){
  const times=baseSlots(doc,date), isToday=(date===todayStr()); const now=new Date(), nowMin=now.getHours()*60+now.getMinutes();
  const sch=docSchedule(doc), tokenWise=!!sch.tokenWise;
  const shiftOverMin = tokenWise && times.length ? (toMin(times[times.length-1]) + (Number(sch.slotMinutes)||15)) : null;
  return times.map((t,i)=>({ time:t, tokenIdx:i+1, past: tokenWise ? (isToday && nowMin>=shiftOverMin) : (isToday && toMin(t)<=nowMin), appt:myAppts(doc).find(a=>a.date===date&&a.time===t&&a.status!=='cancelled')||null }));
}
function schedSlotLabel(s,tokenWise){ return tokenWise ? tokenLabel(s.tokenIdx) : fmt12(s.time); }
function schedSlotTile(s,tokenWise){
  const label=schedSlotLabel(s,tokenWise);
  if(!s.appt){
    if(s.past) return `<div class="sched-slot past" title="Doctor ki shift khatam ho gayi hai — lock hai"><div class="t">${label}</div><div class="plus">🔒</div></div>`;
    return `<div class="sched-slot empty" data-slot-time="${s.time}"><div class="t">${label}</div><div class="plus">+</div></div>`;
  }
  const st=migrateStatus(s.appt.status), skipped=!!s.appt.skippedAt&&st!=='completed'&&st!=='no_show';
  const cls=st==='completed'?'completed':st==='no_show'?'missed':skipped?'skipped':'booked';
  const ppLabel=st==='completed'?'✕ Completed':st==='no_show'?'No show':skipped?'Skip':tokenLabel(s.appt.tokenNo);
  return `<div class="sched-slot ${cls}" data-slot-time="${s.time}"><div class="t">${label}</div><div class="pn">${s.appt.patientName}</div><div class="pp">${ppLabel}</div></div>`;
}
function apptTile(a){ const st=migrateStatus(a.status); return `<div class="tile" data-open-appt="${a.id}"><div class="tile-icon c-${st}">${ICONS.calendar}</div><div class="tile-title">${a.patientName}</div><div class="tile-sub">${niceDate(a.date)} · ${fmt12(a.time)}</div><span class="tile-badge st-${st}">${tokenLabel(a.tokenNo)} · ${statusLabel(st)}</span></div>`; }
function openAppointmentDetailModal(doc,a){
  if(!a) return; const st=migrateStatus(a.status), open=isOpenStatus(st), p=payOf(a);
  openModal(`<h3 style="text-align:center;">${a.patientName}</h3><div class="sub" style="text-align:center;">Token ${tokenLabel(a.tokenNo)} · ${apptCode(a.id)}</div>
    <div class="kv-list mt"><div class="r"><span>Date & time</span><span>${niceDate(a.date)}, ${fmt12(a.time)}</span></div><div class="r"><span>Phone</span><span>${a.patientPhone}</span></div>${a.patientAge?`<div class="r"><span>Age / gender</span><span>${a.patientAge} yrs ${a.patientGender||''}</span></div>`:''}
    ${a.bookedFor&&a.bookedFor.relation&&a.bookedFor.relation!=='Self'?`<div class="r"><span>Booked for</span><span>${a.bookedFor.name||''} (${a.bookedFor.relation})</span></div>`:''}
    <div class="r"><span>Reason</span><span>${a.reason||'—'}</span></div><div class="r"><span>Status</span><span>${statusBadge(st)}</span></div><div class="r"><span>Fee</span><span>${money(a.fee)}</span></div><div class="r"><span>Payment</span><span>${a.paymentStatus==='paid'?payBadge('success')+(p&&p.method?' '+p.method.toUpperCase():''):payBadge('pending')}</span></div></div>
    <div class="row gap8 mt">
      ${open?`${st==='booked'?'<button class="btn btn-ghost btn-sm" data-do="confirmed">Confirm</button>':''}${st!=='arrived'&&st!=='in_consultation'?'<button class="btn btn-ghost btn-sm" data-do="arrived">Mark Arrived</button>':''}${st!=='in_consultation'?'<button class="btn btn-ghost btn-sm" data-do="in_consultation">Start Consultation</button>':''}<button class="btn btn-coral btn-sm" data-do="completed">Mark Completed</button><button class="btn btn-outline btn-sm" data-do="no_show">No Show</button><button class="btn btn-outline btn-sm" id="ad-resched">Reschedule</button><button class="btn btn-danger btn-sm" data-do="cancelled">Cancel</button>`:''}
      ${a.paymentStatus==='paid'?'<button class="btn btn-outline btn-sm" id="ad-unpay">Mark Payment Pending</button>':'<button class="btn btn-ghost btn-sm" data-do="paid">Mark Paid</button>'}
      <button class="btn btn-outline btn-sm" id="ad-patient">View Patient</button><button class="btn btn-outline btn-sm" id="ad-wa">WhatsApp</button></div>`);
  document.querySelectorAll('[data-do]').forEach(b=>b.onclick=async()=>{ const s=b.dataset.do; if(s!=='paid'&&s!=='cancelled') closeModal(); if(s==='cancelled'){ if(!confirm('Ye appointment cancel karein?')) return; closeModal(); } await applyApptAction(doc,a,s); });
  $('ad-resched')&&($('ad-resched').onclick=()=>openRescheduleModal(doc,a,()=>renderAdmin()));
  $('ad-unpay')&&($('ad-unpay').onclick=async()=>{ markApptUnpaid(a); await saveState(); closeModal(); renderAdmin(); });
  $('ad-patient').onclick=()=>{ closeModal(); ui.adminTab='patients'; ui.selectedPatientPhone=a.patientPhone; renderAdmin(); };
  $('ad-wa').onclick=()=>window.open(waLink(a.patientPhone,`Namaste ${unesc(a.patientName)}, ${unesc(doc.name)} ke saath aapki appointment: ${niceDate(a.date)}, ${fmt12(a.time)}, Token ${tokenLabel(a.tokenNo)}. Details: ${apptUrl(doc.slug,apptKey(a))}`),'_blank');
}
function openManualAppointmentModal(doc,prefillDate,prefillTime,prefillName,prefillPhone,waitlistId){
  const date0=prefillDate||todayStr();
  openModal(`<h3>Add Appointment</h3><div class="sub">Phone ya clinic par aaye patient ke liye</div>
    <div class="field-row"><div class="field"><label>Patient Name</label><input id="ma-name" value="${prefillName?esc(unesc(prefillName)):''}"></div><div class="field"><label>Mobile</label><input id="ma-phone" inputmode="numeric" value="${prefillPhone||''}"></div></div>
    <div class="field-row"><div class="field"><label>Age</label><input type="number" id="ma-age"></div><div class="field"><label>Gender</label><select id="ma-gender"><option value="">—</option><option>Male</option><option>Female</option><option>Other</option></select></div></div>
    <div class="field-row"><div class="field"><label>Date</label><input type="date" id="ma-date" value="${date0}" min="${todayStr()}"></div><div class="field"><label>Time</label><select id="ma-time"></select></div></div>
    <div class="field"><label>Reason / symptoms (optional)</label><input id="ma-reason"></div>
    <div class="field-row"><div class="field"><label>Fee (₹)</label><input type="number" id="ma-fee" value="${doc.fee}"></div><div class="field"><label>Payment</label><select id="ma-paid"><option value="pending">Pending — pay at clinic</option><option value="paid">Already paid</option></select></div></div>
    <button class="btn btn-coral btn-block" id="ma-save">Save Appointment</button>`, {wide:true});
  const fill=async()=>{ const d=$('ma-date').value, usage=await Backend.getSlotUsage(doc.id,d), av=computeAvailability(doc,d,usage,{now:new Date(0)}), sel=$('ma-time'); const opts=av.slots.map(s=>`<option value="${s.time}" ${!s.free?'disabled':''}>${fmt12(s.time)}${s.free?'':' (booked)'}</option>`); sel.innerHTML=(opts.join('')||'<option value="">No slots this day</option>')+`<option value="__custom">Custom time…</option>`; if(prefillTime&&d===date0) sel.value=prefillTime; };
  fill(); $('ma-date').onchange=fill;
  $('ma-time').onchange=e=>{ if(e.target.value==='__custom'){ const t=prompt('Time (HH:MM, 24-hour)', '10:00'); if(t&&/^\d{1,2}:\d{2}$/.test(t)){ const o=document.createElement('option'); o.value=pad(Number(t.split(':')[0]))+':'+t.split(':')[1]; o.textContent=fmt12(o.value)+' (custom)'; e.target.insertBefore(o,e.target.lastChild); e.target.value=o.value; } else fill(); } };
  $('ma-save').onclick=async()=>{
    const name=$('ma-name').value.trim(), phone=$('ma-phone').value, date=$('ma-date').value, time=$('ma-time').value;
    if(!name||!validPhone(phone)||!date||!time||time==='__custom'){ toast('Naam, sahi mobile, date aur time bharen'); return; }
    const btn=$('ma-save'); btn.disabled=true;
    try{
      const appt=await Backend.bookAppointment({doctorId:doc.id,date,time,staff:true,source:'manual',fee:Number($('ma-fee').value)||doc.fee,patient:{name:esc(name),phone,age:$('ma-age').value.trim(),gender:$('ma-gender').value,reason:esc($('ma-reason').value.trim())}});
      if(!state.appointments.find(x=>x.id===appt.id)){ state.appointments.push(appt); syncBaselineItem('appointments',appt); }
      if($('ma-paid').value==='paid') markApptPaid(appt,'cash','');
      if(waitlistId) state.waitlist=state.waitlist.filter(w=>w.id!==waitlistId);
      await saveState(); closeModal(); renderAdmin(); toast('Appointment added — Token '+tokenLabel(appt.tokenNo)); Notify.trigger('booking',doc,appt);
    }catch(e){ btn.disabled=false; toast(errMsg(e)); }
  };
}
function openRescheduleModal(doc,appt,afterSave,byPatient){
  let selDate=appt.date, selTime=null;
  const draw=async()=>{
    const dates=[]; const max=Number((doc.settings||{}).advanceDays)||14; for(let i=0;i<=Math.max(14,max);i++) dates.push(addDays(todayStr(),i));
    const usage=await Backend.getSlotUsage(doc.id,selDate); if(selDate===appt.date&&usage[appt.time]) usage[appt.time].count=Math.max(0,usage[appt.time].count-1);
    const av=byPatient?computeAvailability(doc,selDate,usage):computeAvailability(doc,selDate,usage,{now:new Date(0)});
    openModal(`<h3>Reschedule</h3><div class="sub">${appt.patientName} · abhi ${niceDate(appt.date)}, ${fmt12(appt.time)}</div><div class="section-label mt">Nayi tareekh</div>
      <div class="date-strip">${dates.slice(0,byPatient?max+1:dates.length).map(ds=>`<button class="date-pill ${ds===selDate?'picked':''}" data-d="${ds}"><div class="dow">${dow(ds)}</div><div class="dnum">${new Date(ds+'T00:00:00').getDate()}</div></button>`).join('')}</div>
      <div class="section-label mt">Naya samay</div>${av.closed?`<div class="muted">${av.label||'Is din appointments available nahi'}</div>`:`<div class="slot-grid">${av.slots.map(s=>`<button class="slot ${!s.free?'taken':''}" ${!s.free?'disabled':''} style="${s.time===selTime?'outline:2px solid var(--coral);':''}" data-t="${s.time}">${fmt12(s.time)}</button>`).join('')}</div>`}
      <button class="btn btn-coral btn-block mt" id="rs-ok" ${selTime?'':'disabled'}>Confirm reschedule</button>`,{wide:true});
    document.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{ selDate=b.dataset.d; selTime=null; draw(); });
    document.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{ selTime=b.dataset.t; draw(); });
    $('rs-ok').onclick=async()=>{ const old=appt.date; try{ await Backend.rescheduleAppointment(doc.id,appt.id,selDate,selTime,byPatient?'patient':'staff'); }catch(e){ toast(errMsg(e)); return; }
      syncBaselineItem('appointments',appt); await saveState(); closeModal(); toast('Appointment reschedule ho gayi — '+niceDate(appt.date)+', '+fmt12(appt.time)); notifyIfWaitlist(doc,old); Notify.trigger('reschedule',doc,appt); if(afterSave) afterSave(); };
  };
  draw();
}
function notifyIfWaitlist(doc,dateStr){ const n=state.waitlist.filter(w=>w.doctorId===doc.id&&w.date===dateStr).length; if(n>0&&session.role!=='patient'&&session.role) toast(n+' patient(s) waitlist mein hain '+niceDate(dateStr)+' ke liye — Appointments › Day slots se contact karein'); }

/* ================= DOCTOR APP part 2: patients, schedule, payments, expenses, reports, booking page, settings ================= */
const $$ = sel=>document.querySelector(sel);
function ptOf(doc,phone){ return state.patients.find(p=>p.doctorId===doc.id&&p.phone===phone); }
function patientRows(doc){
  const t=todayStr(), all=myAppts(doc);
  return state.patients.filter(p=>p.doctorId===doc.id&&!p.deleted).map(p=>{
    const ap=all.filter(a=>a.patientPhone===p.phone), hist=state.histories.filter(h=>h.doctorId===doc.id&&h.patientPhone===p.phone);
    const past=ap.filter(a=>a.date<=t&&a.status!=='cancelled').sort((a,b)=>b.date.localeCompare(a.date))[0], next=ap.filter(a=>a.date>=t&&isOpenStatus(a.status)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time))[0];
    const pays=state.payments.filter(x=>x.doctorId===doc.id&&(ap.some(a=>a.id===x.apptId)||(!x.apptId&&x.patientPhone===p.phone)));
    const lastH=hist.map(h=>h.date).sort().pop();
    return { p, last:[past&&past.date,lastH].filter(Boolean).sort().pop()||'', next, visits:Math.max(ap.filter(a=>a.status==='completed').length,hist.length), paid:pays.filter(x=>x.status==='success').reduce((s,x)=>s+x.amount,0), owed:pays.filter(x=>x.status==='pending').reduce((s,x)=>s+x.amount,0) };
  }).sort((a,b)=>(b.last||'').localeCompare(a.last||''));
}
function renderAdminPatients(doc){
  const q=(ui.ptQ||'').toLowerCase(), rows=patientRows(doc).filter(r=>!q||r.p.name.toLowerCase().includes(q)||r.p.phone.includes(q)||r.p.pid.toLowerCase().includes(q));
  const el=$('av-patients');
  el.innerHTML=`<div class="tools"><input type="search" id="pt-q" class="grow" placeholder="Search name, mobile or Patient ID" value="${esc(ui.ptQ||'')}"><button class="btn btn-coral btn-sm" id="pt-add">${ICONS.plus} Add Patient</button></div>
    ${rows.length===0?`<div class="card">${emptyBox('Abhi koi patient nahi. Appointment book hote hi patient yahan aa jayenge.','users')}</div>`:`<div class="tscroll"><table class="rtable cards"><thead><tr><th>ID</th><th>Name</th><th>Mobile</th><th>Age</th><th>Gender</th><th>Last visit</th><th>Next appt</th><th>Visits</th><th>Total paid</th><th>Outstanding</th></tr></thead><tbody>
    ${rows.map(r=>`<tr style="cursor:pointer;" data-pt="${r.p.phone}"><td data-l="ID" class="mono">${r.p.pid}</td><td data-l="Name"><b>${r.p.name}</b></td><td data-l="Mobile">${r.p.phone}</td><td data-l="Age">${r.p.age||'—'}</td><td data-l="Gender">${r.p.gender||'—'}</td><td data-l="Last visit">${r.last?niceDate(r.last):'—'}</td><td data-l="Next appt">${r.next?niceDate(r.next.date)+' '+fmt12(r.next.time):'—'}</td><td data-l="Visits">${r.visits}</td><td data-l="Total paid">${money(r.paid)}</td><td data-l="Outstanding" ${r.owed?'style="color:var(--red);font-weight:700;"':''}>${money(r.owed)}</td></tr>`).join('')}</tbody></table></div>`}`;
  $('pt-q').addEventListener('input',e=>{ ui.ptQ=e.target.value.trim(); clearTimeout(renderAdminPatients._t); renderAdminPatients._t=setTimeout(()=>{ renderAdmin(); const x=$('pt-q'); if(x){ x.focus(); x.setSelectionRange(x.value.length,x.value.length); } },250); });
  $('pt-add').onclick=()=>openPatientModal(doc);
  el.querySelectorAll('[data-pt]').forEach(r=>r.onclick=()=>{ ui.selectedPatientPhone=r.dataset.pt; renderAdmin(); });
}
function openPatientModal(doc,p){
  openModal(`<h3>${p?'Edit Patient':'Add Patient'}</h3>
    <div class="field"><label>Full Name</label><input id="pm-name" value="${p?esc(unesc(p.name)):''}"></div>
    <div class="field-row"><div class="field"><label>Mobile</label><input id="pm-phone" inputmode="numeric" value="${p?p.phone:''}" ${p?'disabled':''}></div><div class="field"><label>Age</label><input type="number" id="pm-age" value="${p?p.age:''}"></div></div>
    <div class="field"><label>Gender</label><select id="pm-gender">${['','Male','Female','Other'].map(g=>`<option ${p&&p.gender===g?'selected':''}>${g}</option>`).join('')}</select></div><button class="btn btn-coral btn-block" id="pm-save">Save</button>`);
  $('pm-save').onclick=async()=>{ const name=$('pm-name').value.trim(); if(!name){ toast('Naam daalein'); return; }
    if(p){ p.name=esc(name); p.age=$('pm-age').value.trim(); p.gender=$('pm-gender').value; }
    else { const ph=normPhone($('pm-phone').value); if(!validPhone(ph)){ toast('Sahi 10-digit mobile daalein'); return; } if(ptOf(doc,ph)){ toast('Ye patient pehle se hai'); return; }
      const n=state.patients.filter(x=>x.doctorId===doc.id).length+1; state.patients.push({id:uid(),doctorId:doc.id,pid:'P'+String(n).padStart(4,'0'),phone:ph,name:esc(name),age:$('pm-age').value.trim(),gender:$('pm-gender').value,notes:[],createdAt:new Date().toISOString()}); ui.selectedPatientPhone=ph; }
    await saveState(); closeModal(); renderAdmin(); toast('Patient saved'); };
}
function renderPatientDetail(doc,phone){
  const p=ptOf(doc,phone); if(!p){ ui.selectedPatientPhone=null; return renderAdminPatients(doc); }
  const r=patientRows(doc).find(x=>x.p.id===p.id), ap=myAppts(doc).filter(a=>a.patientPhone===phone).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
  const pays=state.payments.filter(x=>x.doctorId===doc.id&&(ap.some(a=>a.id===x.apptId)||(!x.apptId&&x.patientPhone===phone))).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const hist=state.histories.filter(h=>h.doctorId===doc.id&&h.patientPhone===phone).sort((a,b)=>b.date.localeCompare(a.date));
  const docs=state.documents.filter(d=>d.doctorId===doc.id&&d.patientPhone===phone);
  const el=$('av-patients');
  el.innerHTML=`<button class="btn btn-outline btn-sm" id="pd-back">${ICONS.back} All patients</button>
    <div class="card mt"><div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;"><div class="doc-avatar" style="background:${doc.color};width:54px;height:54px;font-size:19px;">${initials(unesc(p.name))}</div><div style="flex:1;min-width:160px;"><h3 style="font-size:21px;">${p.name}</h3><div class="muted">${p.pid} · ${p.phone}${p.age?' · '+p.age+' yrs':''}${p.gender?' · '+p.gender:''}</div></div>
      <div class="row gap8"><button class="btn btn-outline btn-sm" id="pd-edit">Edit</button><button class="btn btn-danger btn-sm" id="pd-delete">${ICONS.trash} Delete</button><button class="btn btn-coral btn-sm" id="pd-appt">Add Appointment</button></div></div></div>
    <div class="kpis mt">${kpi('Visits',r.visits)}${kpi('Total paid',money(r.paid),'','var(--teal)')}${kpi('Outstanding',money(r.owed),'',r.owed?'var(--red)':'')}${kpi('Next appointment',r.next?niceDate(r.next.date):'—')}</div>
    <div class="card"><div class="section-label" style="display:flex;justify-content:space-between;">Appointment history<span class="muted">${ap.length}</span></div>${ap.length?ap.slice(0,20).map(a=>`<div class="detail-row" data-open-appt="${a.id}" style="cursor:pointer;"><span class="k">${niceDate(a.date)} · ${fmt12(a.time)} · ${tokenLabel(a.tokenNo)}</span><span class="v">${statusBadge(a.status)}</span></div>`).join(''):'<div class="muted">No appointments</div>'}</div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">Payments<button class="btn btn-outline btn-sm" id="pd-pay">${ICONS.plus} Add Payment</button></div>${pays.length?pays.map(x=>`<div class="detail-row" data-pay="${x.id}" style="cursor:pointer;"><span class="k">${niceDate((x.date||'').slice(0,10))} · ${(x.method||'').toUpperCase()}</span><span class="v">${money(x.amount)} ${payBadge(x.status)}</span></div>`).join(''):'<div class="muted">No payments</div>'}</div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">Visits & prescriptions<button class="btn btn-outline btn-sm" id="pd-hist">${ICONS.plus} Add visit</button></div>${hist.length?hist.map(historyTile).join(''):'<div class="muted">No visit records yet</div>'}</div>
    <div class="card mt"><div class="section-label">Symptoms / reasons for visit</div>${ap.filter(a=>a.reason).length?ap.filter(a=>a.reason).slice(0,10).map(a=>`<div class="detail-row"><span class="k">${niceDate(a.date)}</span><span class="v" style="font-weight:500;">${a.reason}</span></div>`).join(''):'<div class="muted">—</div>'}</div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">Documents<button class="btn btn-outline btn-sm" id="pd-doc">${ICONS.plus} Upload</button></div>${docs.length?docs.map(d=>`<div class="detail-row" data-doc="${d.id}" style="cursor:pointer;"><span class="k">${d.name||'Document'}</span><span class="v">${niceDate((d.uploadedAt||'').slice(0,10))}</span></div>`).join(''):'<div class="muted">No documents</div>'}</div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">Notes<button class="btn btn-outline btn-sm" id="pd-note">${ICONS.plus} Add Note</button></div>${(p.notes||[]).length?p.notes.slice().reverse().map(n=>`<div class="detail-row"><span class="k">${niceDate(n.date)}</span><span class="v" style="font-weight:500;text-align:left;flex:1;margin-left:14px;">${n.text}</span></div>`).join(''):'<div class="muted">No notes</div>'}</div>`;
  $('pd-back').onclick=()=>{ ui.selectedPatientPhone=null; renderAdmin(); }; $('pd-edit').onclick=()=>openPatientModal(doc,p); $('pd-appt').onclick=()=>openManualAppointmentModal(doc,null,null,p.name,p.phone);
  $('pd-delete').onclick=()=>{ openModal(`<h3 style="color:var(--red);">Delete ${p.name}?</h3><div class="sub">Ye patient list se hat jayega. Unki purani appointments/payments/history records safe rahenge.</div><div class="modal-actions"><button class="btn btn-outline" style="flex:1;" id="pd-del-no">Cancel</button><button class="btn btn-danger" style="flex:1;" id="pd-del-yes">Delete</button></div>`); $('pd-del-no').onclick=closeModal; $('pd-del-yes').onclick=async()=>{ p.deleted=true; await saveState(); closeModal(); ui.selectedPatientPhone=null; renderAdmin(); toast('Patient deleted'); }; };
  $('pd-pay').onclick=()=>openPaymentModal(doc,null,p); $('pd-hist').onclick=()=>openHistoryModal(doc,{patientName:unesc(p.name),patientPhone:p.phone,patientAge:p.age,patientGender:p.gender});
  $('pd-doc').onclick=()=>openDocumentModal(doc,{name:p.name,phone:p.phone},'doctor',()=>renderAdmin());
  $('pd-note').onclick=()=>{ openModal(`<h3>Add note</h3><div class="field"><textarea id="nt-t" rows="4" placeholder="Private note about this patient"></textarea></div><button class="btn btn-coral btn-block" id="nt-go">Save note</button>`); $('nt-go').onclick=async()=>{ const t=$('nt-t').value.trim(); if(!t) return; (p.notes=p.notes||[]).push({id:uid(),date:todayStr(),text:esc(t)}); await saveState(); closeModal(); renderAdmin(); }; };
  el.querySelectorAll('[data-open-appt]').forEach(c=>c.onclick=()=>openAppointmentDetailModal(doc,state.appointments.find(x=>x.id===c.dataset.openAppt)));
  el.querySelectorAll('[data-pay]').forEach(c=>c.onclick=()=>openPaymentModal(doc,state.payments.find(x=>x.id===c.dataset.pay),p));
  el.querySelectorAll('[data-doc]').forEach(c=>c.onclick=()=>openDocumentPreview(state.documents.find(x=>x.id===c.dataset.doc)));
}
async function openDocumentModal(doc,patient,source,onSaved){
  openModal(`<h3>Upload document</h3><div class="sub">${patient.name}</div><div class="field"><label>Name</label><input id="dm-name" placeholder="e.g. Blood test report"></div><div class="field"><label>File (image or PDF)</label><input type="file" id="dm-file" accept="image/*,application/pdf"></div><div class="muted" style="margin-top:-6px;">Images apne aap ~2 MB tak compress ho jaati hain. PDF seedha 2 MB se chhoti honi chahiye.</div><button class="btn btn-coral btn-block mt" id="dm-go">Upload</button>`);
  $('dm-go').onclick=async()=>{ const f=$('dm-file').files[0]; if(!f){ toast('File chunein'); return; } const isImg=/^image\//.test(f.type); if(!isImg&&f.size>2*1024*1024){ toast('PDF 2 MB se chhoti honi chahiye'); return; } if(isImg&&f.size>15*1024*1024){ toast('Image bahut badi hai — chhoti photo chunein'); return; }
    const b=$('dm-go'); b.disabled=true; b.textContent='Uploading…';
    try{ const sv=await Backend.saveFile(f,{doctorId:doc.id});
      state.documents.push({id:uid(),doctorId:doc.id,patientPhone:patient.phone,patientPhoneE164:e164(patient.phone),name:esc($('dm-name').value.trim()||f.name),mimeType:sv.mimeType,size:sv.size,dataUrl:sv.dataUrl,storagePath:sv.storagePath||null,source:source||'doctor',uploadedAt:new Date().toISOString()});
      await saveState(); closeModal(); toast('Document uploaded'); if(onSaved) onSaved(); }catch(e){ b.disabled=false; b.textContent='Upload'; toast(errMsg(e)); } };
}
function openDocumentPreview(d){ if(!d) return; openModal(`<h3>${d.name}</h3>${/^image\//.test(d.mimeType||'')||/^data:image/.test(d.dataUrl)?`<img src="${d.dataUrl}" style="width:100%;border-radius:12px;margin-top:12px;">`:`<div class="mt"><a class="btn btn-coral btn-block" href="${d.dataUrl}" target="_blank" rel="noopener" download="${esc(unesc(d.name))}">Open / download file</a></div>`}`); }

/* ---- schedule ---- */
function renderAdminSchedule(doc){
  const sch=JSON.parse(JSON.stringify(docSchedule(doc))), dn=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], order=[1,2,3,4,5,6,0], el=$('av-schedule');
  const durs=[5,10,15,20,30,45,60], custom=!durs.includes(Number(sch.slotMinutes));
  el.innerHTML=`<div class="card"><div class="section-label">Appointment duration</div><div class="chips" id="sc-dur">${durs.map(n=>`<button class="chip ${Number(sch.slotMinutes)===n?'on':''}" data-dur="${n}">${n} min</button>`).join('')}<button class="chip ${custom?'on':''}" data-dur="custom">Custom</button></div>
      <div class="field-row"><div class="field"><label>Slot length (minutes)</label><input type="number" id="sc-min" min="5" value="${sch.slotMinutes}"></div><div class="field"><label>Max patients per slot</label><input type="number" id="sc-slotmax" min="1" value="${sch.maxPerSlot||1}"></div><div class="field"><label>Max patients per day (0 = no limit)</label><input type="number" id="sc-daymax" min="0" value="${sch.maxPerDay||0}"></div></div>
      ${switchRow('sc-tokenwise','Token-wise slots','Bookings mein patients ko time ki jagah token number dikhega (jaise #01, #02) — samay clinic mein pata chalega',!!sch.tokenWise)}</div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">Working days & hours<button class="btn btn-ghost btn-sm" id="sc-copy">Copy Monday to all</button></div>
      ${order.map(i=>{ const c=sch.days[i]; const r=c.ranges||[]; const m=r[0]||{start:'',end:''}, e=r[1]||{start:'',end:''}; return `<div class="daycfg" data-day="${i}"><div class="dh"><b>${dn[i]}</b><input type="checkbox" class="dy-on" ${c.enabled?'checked':''} style="width:22px;height:22px;accent-color:var(--teal);"></div>
        <div class="dr"><span style="width:62px;">Morning</span><input type="time" class="dy-m1" value="${m.start}"> – <input type="time" class="dy-m2" value="${m.end}"></div><div class="dr"><span style="width:62px;">Evening</span><input type="time" class="dy-e1" value="${e.start}"> – <input type="time" class="dy-e2" value="${e.end}"></div></div>`; }).join('')}
      <button class="btn btn-coral btn-block mt" id="sc-save">Save schedule</button></div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">Blocked dates & times<button class="btn btn-outline btn-sm" id="bl-add">${ICONS.plus} Block</button></div>
      ${(sch.blocks||[]).length?sch.blocks.slice().sort((a,b)=>(a.date||a.from||'').localeCompare(b.date||b.from||'')).map(b=>`<div class="appt-row"><div class="appt-info"><div class="nm">${esc(b.label||'Blocked')}</div><div class="ph">${blockText(b)}</div></div><button class="btn btn-danger btn-sm" data-delblock="${b.id}">${ICONS.trash}</button></div>`).join(''):'<div class="muted">Koi block nahi. Holiday, leave, lunch break ya vacation yahan add karein — patient ko wo slots dikhenge hi nahi.</div>'}</div>`;
  const read=()=>{ const s=JSON.parse(JSON.stringify(docSchedule(doc))); s.slotMinutes=Math.max(5,Number($('sc-min').value)||20); s.maxPerSlot=Math.max(1,Number($('sc-slotmax').value)||1); s.maxPerDay=Math.max(0,Number($('sc-daymax').value)||0); s.tokenWise=$('sc-tokenwise').checked;
    el.querySelectorAll('[data-day]').forEach(r=>{ const i=Number(r.dataset.day), g=c=>r.querySelector(c).value; s.days[i]={enabled:r.querySelector('.dy-on').checked,ranges:[{start:g('.dy-m1'),end:g('.dy-m2')},{start:g('.dy-e1'),end:g('.dy-e2')}].filter(x=>x.start&&x.end&&toMin(x.end)>toMin(x.start))}; }); return s; };
  el.querySelectorAll('[data-dur]').forEach(b=>b.onclick=()=>{ if(b.dataset.dur==='custom'){ $('sc-min').focus(); return; } $('sc-min').value=b.dataset.dur; el.querySelectorAll('[data-dur]').forEach(x=>x.classList.toggle('on',x===b)); });
  $('sc-copy').onclick=()=>{ const mon=el.querySelector('[data-day="1"]'); el.querySelectorAll('[data-day]').forEach(r=>{ ['.dy-m1','.dy-m2','.dy-e1','.dy-e2'].forEach(c=>{ r.querySelector(c).value=mon.querySelector(c).value; }); }); toast('Monday ka time sabhi dinon par copy ho gaya (Save dabayein)'); };
  $('sc-save').onclick=async()=>{ const s=read(); if(!Object.values(s.days).some(d=>d.enabled)){ toast('Kam se kam ek working day chalu rakhein'); return; } doc.schedule=s; await saveState(); toast('Schedule saved'); renderAdmin(); };
  $('bl-add').onclick=()=>{ doc.schedule=read(); openBlockModal(doc); };
  el.querySelectorAll('[data-delblock]').forEach(b=>b.onclick=async()=>{ doc.schedule=read(); doc.schedule.blocks=doc.schedule.blocks.filter(x=>x.id!==b.dataset.delblock); await saveState(); renderAdmin(); toast('Block removed'); });
}
function blockText(b){ if(b.kind==='date') return niceDate(b.date)+' — poora din'; if(b.kind==='range') return niceDate(b.from)+' se '+niceDate(b.to); if(b.kind==='time') return niceDate(b.date)+', '+fmt12(b.start)+'–'+fmt12(b.end); return 'Roz '+fmt12(b.start)+'–'+fmt12(b.end); }
function openBlockModal(doc){
  openModal(`<h3>Block dates / time</h3><div class="field"><label>Type</label><select id="bk-kind"><option value="date">Ek poora din (holiday / emergency leave)</option><option value="range">Kai din (vacation)</option><option value="time">Kisi din ka kuch samay</option><option value="daily">Roz ka break (lunch)</option></select></div>
    <div class="field"><label>Reason</label><select id="bk-label">${['Holiday','Emergency leave','Vacation','Lunch break','Other'].map(x=>`<option>${x}</option>`).join('')}</select></div>
    <div class="field-row" id="bk-d1"><div class="field"><label id="bk-l1">Date</label><input type="date" id="bk-date" value="${todayStr()}" min="${todayStr()}"></div><div class="field" id="bk-f2"><label>Till date</label><input type="date" id="bk-to" value="${todayStr()}" min="${todayStr()}"></div></div>
    <div class="field-row" id="bk-t"><div class="field"><label>From time</label><input type="time" id="bk-s" value="13:00"></div><div class="field"><label>To time</label><input type="time" id="bk-e" value="14:00"></div></div>
    <div id="bk-warn"></div><button class="btn btn-coral btn-block" id="bk-go">Block</button>`);
  const sync=()=>{ const k=$('bk-kind').value; $('bk-d1').classList.toggle('hide',k==='daily'); $('bk-f2').classList.toggle('hide',k!=='range'); $('bk-t').classList.toggle('hide',!(k==='time'||k==='daily')); $('bk-l1').textContent=k==='range'?'From date':'Date'; const lb=$('bk-label'); lb.value=k==='range'?'Vacation':k==='daily'?'Lunch break':k==='date'?'Holiday':lb.value; };
  $('bk-kind').onchange=sync; sync();
  $('bk-go').onclick=async()=>{ const k=$('bk-kind').value, b={id:uid(),kind:k,label:$('bk-label').value};
    if(k==='date') b.date=$('bk-date').value; if(k==='range'){ b.from=$('bk-date').value; b.to=$('bk-to').value; if(b.to<b.from){ toast('End date pehle se pehle nahi ho sakti'); return; } } if(k==='time'){ b.date=$('bk-date').value; } if(k==='time'||k==='daily'){ b.start=$('bk-s').value; b.end=$('bk-e').value; if(!b.start||!b.end||toMin(b.end)<=toMin(b.start)){ toast('Sahi samay chunein'); return; } }
    if((k==='date'&&!b.date)||(k==='time'&&!b.date)||(k==='range'&&!b.from)){ toast('Date chunein'); return; }
    const hit=myAppts(doc).filter(a=>isOpenStatus(a.status)&&blockCovers(b,a.date,a.time)).length;
    doc.schedule.blocks=(doc.schedule.blocks||[]).concat(b); await saveState(); closeModal(); renderAdmin(); toast('Blocked'+(hit?` — ${hit} booked appointment(s) is samay par hain, unhe reschedule/cancel karein`:'')); };
}

/* ---- payments ---- */
function openPaymentModal(doc,pay,patient){
  const pts=state.patients.filter(p=>p.doctorId===doc.id), isNew=!pay, cur=pay||{amount:doc.fee,method:'cash',status:'success',date:new Date().toISOString(),ref:'',notes:''};
  const own=patient?patient.phone:cur.patientPhone||'';
  openModal(`<h3>${isNew?'Add Payment':'Payment '+('PAY-'+cur.id.slice(0,5).toUpperCase())}</h3>
    ${isNew?`<div class="field"><label>Patient</label><select id="py-pt">${pts.map(p=>`<option value="${p.phone}" ${p.phone===own?'selected':''}>${unesc(p.name)} · ${p.phone}</option>`).join('')}</select></div>`:`<div class="sub">${cur.patientName}</div>`}
    <div class="field-row"><div class="field"><label>Amount (₹)</label><input type="number" id="py-amt" value="${cur.amount}"></div><div class="field"><label>Method</label><select id="py-m">${[['upi','UPI'],['card','Card'],['cash','Cash'],['other','Other']].map(m=>`<option value="${m[0]}" ${cur.method===m[0]?'selected':''}>${m[1]}</option>`).join('')}</select></div></div>
    <div class="field-row"><div class="field"><label>Status</label><select id="py-s">${Object.keys(PAY_LABEL).map(s=>`<option value="${s}" ${cur.status===s?'selected':''}>${PAY_LABEL[s]}</option>`).join('')}</select></div><div class="field"><label>Date</label><input type="date" id="py-d" value="${(cur.paidAt||cur.date||'').slice(0,10)||todayStr()}"></div></div>
    <div class="field"><label>Reference number</label><input id="py-r" value="${esc(cur.ref||'')}"></div><div class="field"><label>Notes</label><input id="py-n" value="${cur.notes||''}"></div>
    ${!isNew&&cur.apptId?`<div class="muted">Appointment: ${(()=>{ const a=state.appointments.find(x=>x.id===cur.apptId); return a?niceDate(a.date)+' · '+tokenLabel(a.tokenNo):'—'; })()}</div>`:''}
    <button class="btn btn-coral btn-block mt" id="py-save">Save payment</button>`);
  $('py-save').onclick=async()=>{ const amt=Number($('py-amt').value); if(!(amt>0)){ toast('Amount daalein'); return; }
    let p=pay; if(isNew){ const ph=$('py-pt').value; if(!ph){ toast('Pehle patient add karein'); return; } const pt=ptOf(doc,ph); p={id:uid(),doctorId:doc.id,apptId:null,patientName:pt.name,patientPhone:ph}; state.payments.push(p); }
    Object.assign(p,{amount:amt,method:$('py-m').value,status:$('py-s').value,ref:esc($('py-r').value.trim()),notes:esc($('py-n').value.trim()),date:p.date||new Date().toISOString()});
    if(p.status==='success'){ p.paidAt=$('py-d').value+'T12:00:00'; } else delete p.paidAt; if(!p.paidAt) p.date=$('py-d').value+'T12:00:00';
    const a=p.apptId&&state.appointments.find(x=>x.id===p.apptId); if(a){ a.paymentStatus=p.status==='success'?'paid':'pending'; a.paymentMethod=p.method; }
    await saveState(); closeModal(); renderAdmin(); toast('Payment saved'); if(p.status==='success'&&a) Notify.trigger('payment',doc,a); };
}
function renderAdminPayments(doc){
  const f=ui.payF||(ui.payF={status:'',method:'',range:'month'}), t=todayStr(), from=f.range==='today'?t:f.range==='7'?addDays(t,-6):f.range==='month'?t.slice(0,8)+'01':'';
  const all=state.payments.filter(p=>p.doctorId===doc.id), inR=p=>!from||((p.paidAt||p.date||'').slice(0,10)>=from);
  const rows=all.filter(p=>inR(p)&&(!f.status||p.status===f.status)&&(!f.method||p.method===f.method)).sort((a,b)=>(b.paidAt||b.date||'').localeCompare(a.paidAt||a.date||''));
  const sum=s=>all.filter(p=>p.status===s&&inR(p)).reduce((x,p)=>x+p.amount,0);
  const el=$('av-payments');
  el.innerHTML=`<div class="kpis">${kpi('Received',money(sum('success')),'','var(--teal)')}${kpi('Pending',money(all.filter(p=>p.status==='pending').reduce((x,p)=>x+p.amount,0)),'all time','#96660E')}${kpi('Refunded',money(sum('refunded')))}${kpi('Payments',rows.length)}</div>
    ${chipsHtml([{id:'today',label:'Today'},{id:'7',label:'7 Days'},{id:'month',label:'This Month'},{id:'all',label:'All'}],f.range,'data-prange')}
    <div class="tools"><select id="py-fs"><option value="">All statuses</option>${Object.keys(PAY_LABEL).map(s=>`<option value="${s}" ${f.status===s?'selected':''}>${PAY_LABEL[s]}</option>`).join('')}</select><select id="py-fm"><option value="">All methods</option>${['upi','card','cash','other'].map(m=>`<option value="${m}" ${f.method===m?'selected':''}>${m.toUpperCase()}</option>`).join('')}</select><span class="grow"></span><button class="btn btn-outline btn-sm" id="py-csv">Export CSV</button><button class="btn btn-coral btn-sm" id="py-add">${ICONS.plus} Add Payment</button></div>
    ${rows.length===0?`<div class="card">${emptyBox('Koi payment nahi.','money')}</div>`:`<div class="tscroll"><table class="rtable cards"><thead><tr><th>Payment ID</th><th>Patient</th><th>Appointment</th><th>Amount</th><th>Method</th><th>Status</th><th>Date</th><th>Ref</th><th>Notes</th></tr></thead><tbody>${rows.map(p=>{ const a=state.appointments.find(x=>x.id===p.apptId); return `<tr style="cursor:pointer;" data-pay="${p.id}"><td data-l="ID" class="mono">PAY-${p.id.slice(0,5).toUpperCase()}</td><td data-l="Patient">${p.patientName}</td><td data-l="Appointment">${a?niceDate(a.date)+' · '+tokenLabel(a.tokenNo):'—'}</td><td data-l="Amount"><b>${money(p.amount)}</b></td><td data-l="Method">${(p.method||'').toUpperCase()}</td><td data-l="Status">${payBadge(p.status)}</td><td data-l="Date">${niceDate((p.paidAt||p.date||'').slice(0,10))}</td><td data-l="Ref">${p.ref||'—'}</td><td data-l="Notes">${p.notes||'—'}</td></tr>`; }).join('')}</tbody></table></div>`}`;
  el.querySelectorAll('[data-prange]').forEach(b=>b.onclick=()=>{ f.range=b.dataset.prange; renderAdmin(); });
  $('py-fs').onchange=e=>{ f.status=e.target.value; renderAdmin(); }; $('py-fm').onchange=e=>{ f.method=e.target.value; renderAdmin(); };
  $('py-add').onclick=()=>openPaymentModal(doc); el.querySelectorAll('[data-pay]').forEach(r=>r.onclick=()=>openPaymentModal(doc,state.payments.find(x=>x.id===r.dataset.pay)));
  $('py-csv').onclick=()=>downloadCsv('payments.csv',[['Payment ID','Patient','Appointment','Amount','Method','Status','Date','Reference','Notes']].concat(rows.map(p=>{ const a=state.appointments.find(x=>x.id===p.apptId); return ['PAY-'+p.id.slice(0,5).toUpperCase(),p.patientName,a?a.date+' '+a.time:'',p.amount,p.method,PAY_LABEL[p.status],(p.paidAt||p.date||'').slice(0,10),p.ref,p.notes]; })));
}

/* ---- expenses / income ---- */
function rangeFrom(key){ const t=todayStr(); if(key==='today') return [t,t]; if(key==='7') return [addDays(t,-6),t]; if(key==='month') return [t.slice(0,8)+'01',t]; if(key==='last'){ const d=new Date(t+'T00:00:00'); const s=new Date(d.getFullYear(),d.getMonth()-1,1), e=new Date(d.getFullYear(),d.getMonth(),0); return [fmtDate(s),fmtDate(e)]; } return ['','']; }
function renderAdminFinance(doc){
  const f=ui.finF||(ui.finF={range:'month',from:'',to:'',cat:''}), [a,b]=f.range==='custom'?[f.from,f.to]:rangeFrom(f.range), fin=docFinance(doc.id,a,b);
  const led=state.ledger.filter(l=>l.doctorId===doc.id&&(!a||l.date>=a)&&(!b||l.date<=b)&&(!f.cat||l.category===f.cat)).sort((x,y)=>y.date.localeCompare(x.date));
  const el=$('av-finance');
  el.innerHTML=`<div class="kpis">${kpi('Total Income',money(fin.income),'','var(--teal)')}${kpi('Total Expenses',money(fin.expense),'','var(--red)')}${kpi('Net Income',money(fin.profit),'',fin.profit>=0?'var(--teal)':'var(--red)')}</div>
    ${chipsHtml([{id:'today',label:'Today'},{id:'7',label:'7 Days'},{id:'month',label:'This Month'},{id:'last',label:'Last Month'},{id:'all',label:'All'},{id:'custom',label:'Custom'}],f.range,'data-frange')}
    ${f.range==='custom'?`<div class="tools"><input type="date" id="fi-a" value="${f.from}"><input type="date" id="fi-b" value="${f.to}"></div>`:''}
    <div class="tools"><select id="fi-cat"><option value="">All categories</option>${EXPENSE_CATEGORIES.map(c=>`<option ${f.cat===c?'selected':''}>${c}</option>`).join('')}</select><span class="grow"></span><button class="btn btn-outline btn-sm" id="fi-inc">${ICONS.plus} Income</button><button class="btn btn-coral btn-sm" id="fi-exp">${ICONS.plus} Expense</button></div>
    <div class="card"><div class="section-label">Patient payments included in income: ${money(fin.patientIncome)}</div>${led.length===0?emptyBox('Is period mein koi entry nahi.','money'):led.map(l=>`<div class="appt-row" data-led="${l.id}" style="cursor:pointer;"><div class="appt-info"><div class="nm">${l.category||l.title||'Entry'} ${l.receipt?'📎':''}</div><div class="ph">${niceDate(l.date)}${l.method?' · '+l.method.toUpperCase():''}${l.note?' · '+l.note:''}</div></div><b style="color:${l.type==='income'?'var(--teal)':'var(--red)'};">${l.type==='income'?'+':'−'}${money(l.amount)}</b></div>`).join('')}</div>`;
  el.querySelectorAll('[data-frange]').forEach(x=>x.onclick=()=>{ f.range=x.dataset.frange; renderAdmin(); });
  const bind=(id,fn)=>{ const x=$(id); if(x) x.onchange=fn; }; bind('fi-a',e=>{ f.from=e.target.value; renderAdmin(); }); bind('fi-b',e=>{ f.to=e.target.value; renderAdmin(); }); bind('fi-cat',e=>{ f.cat=e.target.value; renderAdmin(); });
  $('fi-inc').onclick=()=>openLedgerModal(doc,'income'); $('fi-exp').onclick=()=>openLedgerModal(doc,'expense');
  el.querySelectorAll('[data-led]').forEach(r=>r.onclick=()=>openLedgerModal(doc,null,state.ledger.find(x=>x.id===r.dataset.led)));
}
function openLedgerModal(doc,type,entry){
  const e=entry||{type,category:type==='income'?'Other income':EXPENSE_CATEGORIES[0],amount:'',date:todayStr(),method:'cash',note:''}, isExp=e.type==='expense';
  openModal(`<h3>${entry?'Edit':'Add'} ${isExp?'Expense':'Income'}</h3>
    <div class="field-row"><div class="field"><label>${isExp?'Category':'Title'}</label>${isExp?`<select id="lg-c">${EXPENSE_CATEGORIES.map(c=>`<option ${e.category===c?'selected':''}>${c}</option>`).join('')}</select>`:`<input id="lg-c" value="${esc(e.category||'')}">`}</div><div class="field"><label>Amount (₹)</label><input type="number" id="lg-a" value="${e.amount}"></div></div>
    <div class="field-row"><div class="field"><label>Date</label><input type="date" id="lg-d" value="${e.date}"></div><div class="field"><label>Payment method</label><select id="lg-m">${[['cash','Cash'],['upi','UPI'],['card','Card'],['other','Other']].map(m=>`<option value="${m[0]}" ${e.method===m[0]?'selected':''}>${m[1]}</option>`).join('')}</select></div></div>
    <div class="field"><label>Note</label><input id="lg-n" value="${e.note||''}"></div>
    ${isExp?`<div class="field"><label>Receipt / document (optional)</label><input type="file" id="lg-f" accept="image/*,application/pdf">${e.receipt?`<div class="muted mt">Attached: <a href="${e.receipt.dataUrl}" target="_blank" rel="noopener">${e.receipt.name}</a></div>`:''}</div>`:''}
    <div class="row gap8"><button class="btn btn-coral" style="flex:1;" id="lg-save">Save</button>${entry?`<button class="btn btn-danger" id="lg-del">${ICONS.trash}</button>`:''}</div>`);
  $('lg-save').onclick=async()=>{ const amt=Number($('lg-a').value); if(!(amt>0)){ toast('Amount daalein'); return; } const c=$('lg-c').value.trim(); if(!c){ toast('Category/Title daalein'); return; }
    let rec=entry; if(!rec){ rec={id:uid(),doctorId:doc.id,type:e.type}; state.ledger.push(rec); }
    Object.assign(rec,{category:esc(c),title:esc(c),amount:amt,date:$('lg-d').value,method:$('lg-m').value,note:esc($('lg-n').value.trim())});
    const fl=$('lg-f')&&$('lg-f').files[0]; if(fl){ const isImg=/^image\//.test(fl.type); if(!isImg&&fl.size>2*1024*1024){ toast('Receipt (PDF) 2 MB se chhoti ho'); return; } if(isImg&&fl.size>15*1024*1024){ toast('Image bahut badi hai — chhoti photo chunein'); return; } try{ const sv=await Backend.saveFile(fl,{doctorId:doc.id}); rec.receipt={name:esc(fl.name),dataUrl:sv.dataUrl,mimeType:sv.mimeType,storagePath:sv.storagePath||null}; }catch(err){ toast(errMsg(err)); return; } }
    await saveState(); closeModal(); renderAdmin(); toast('Saved'); };
  const d=$('lg-del'); if(d) d.onclick=async()=>{ if(!confirm('Ye entry delete karein?')) return; state.ledger=state.ledger.filter(x=>x!==entry); await saveState(); closeModal(); renderAdmin(); };
}

/* ---- reports ---- */
function reportData(doc){
  const f=ui.repF||(ui.repF={range:'month',from:'',to:''}), [a,b]=f.range==='custom'?[f.from||todayStr(),f.to||todayStr()]:rangeFrom(f.range), t=todayStr();
  const ap=myAppts(doc), inR=x=>(!a||x.date>=a)&&(!b||x.date<=b), rng=ap.filter(inR), fin=docFinance(doc.id,a,b);
  const firstSeen={}; ap.filter(x=>x.status!=='cancelled').forEach(x=>{ if(!firstSeen[x.patientPhone]||x.date<firstSeen[x.patientPhone]) firstSeen[x.patientPhone]=x.date; });
  const phones=[...new Set(rng.filter(x=>x.status!=='cancelled').map(x=>x.patientPhone))];
  const newP=phones.filter(p=>firstSeen[p]>=a&&firstSeen[p]<=b).length, pend=state.payments.filter(p=>p.doctorId===doc.id&&p.status==='pending'&&(!a||(p.date||'').slice(0,10)>=a)&&(!b||(p.date||'').slice(0,10)<=b)).reduce((s,p)=>s+p.amount,0);
  return { a,b,rng,fin,newP,returning:phones.length-newP,pend,completed:rng.filter(x=>x.status==='completed').length,cancelled:rng.filter(x=>x.status==='cancelled').length,noshow:rng.filter(x=>x.status==='no_show').length,
    today:ap.filter(x=>x.date===t&&x.status!=='cancelled').length, week:ap.filter(x=>x.date>=addDays(t,-6)&&x.date<=t&&x.status!=='cancelled').length, month:ap.filter(x=>x.date.startsWith(t.slice(0,7))&&x.status!=='cancelled').length };
}
function renderAdminAnalytics(doc){
  const f=ui.repF||(ui.repF={range:'month',from:'',to:''}), r=reportData(doc), el=$('av-analytics');
  const days=[]; let d=r.a||addDays(todayStr(),-29); const end=r.b||todayStr(); while(d<=end&&days.length<62){ days.push(d); d=addDays(d,1); }
  const step=Math.ceil(days.length/14), daily=days.filter((_,i)=>i%step===0).map(x=>({label:new Date(x+'T00:00:00').getDate()+' '+new Date(x+'T00:00:00').toLocaleDateString('en-IN',{month:'short'}),value:r.rng.filter(y=>y.date===x&&y.status!=='cancelled').length}));
  const revDaily=days.filter((_,i)=>i%step===0).map(x=>({label:new Date(x+'T00:00:00').getDate()+'',value:state.payments.filter(p=>p.doctorId===doc.id&&p.status==='success'&&(p.paidAt||p.date).slice(0,10)===x).reduce((s,p)=>s+p.amount,0)}));
  el.innerHTML=`${chipsHtml([{id:'today',label:'Today'},{id:'7',label:'7 Days'},{id:'month',label:'This Month'},{id:'last',label:'Last Month'},{id:'custom',label:'Custom'}],f.range,'data-rr')}
    ${f.range==='custom'?`<div class="tools"><input type="date" id="rp-a" value="${f.from}"><input type="date" id="rp-b" value="${f.to}"></div>`:''}
    <div class="kpis">${kpi('Appointments (range)',r.rng.filter(x=>x.status!=='cancelled').length)}${kpi('Today',r.today)}${kpi('Last 7 days',r.week)}${kpi('This month',r.month)}${kpi('Completed',r.completed,'','var(--teal)')}${kpi('Cancelled',r.cancelled)}${kpi('No-shows',r.noshow)}${kpi('New patients',r.newP)}${kpi('Returning patients',r.returning)}${kpi('Revenue',money(r.fin.income),'','var(--teal)')}${kpi('Pending payments',money(r.pend),'','#96660E')}${kpi('Expenses',money(r.fin.expense),'','var(--red)')}${kpi('Net income',money(r.fin.profit),'',r.fin.profit>=0?'var(--teal)':'var(--red)')}</div>
    <div class="card"><div class="section-label">Appointments per day</div>${barChartHtml(daily,{color:'teal'})}</div><div class="card mt"><div class="section-label">Revenue per day</div>${barChartHtml(revDaily,{prefix:'₹',color:'mint'})}</div>
    <div class="row gap8 mt"><button class="btn btn-outline" id="rp-csv">Export CSV</button><button class="btn btn-outline" id="rp-pdf">Export PDF / Print</button></div>`;
  el.querySelectorAll('[data-rr]').forEach(b=>b.onclick=()=>{ f.range=b.dataset.rr; renderAdmin(); });
  ['rp-a','rp-b'].forEach(id=>{ const x=$(id); if(x) x.onchange=e=>{ if(id==='rp-a') f.from=e.target.value; else f.to=e.target.value; renderAdmin(); }; });
  $('rp-csv').onclick=()=>downloadCsv('report-'+(r.a||'all')+'_'+(r.b||'')+'.csv',[['Date','Time','Token','Patient','Mobile','Status','Fee','Payment']].concat(r.rng.sort((x,y)=>(x.date+x.time).localeCompare(y.date+y.time)).map(a=>[a.date,a.time,tokenLabel(a.tokenNo),a.patientName,a.patientPhone,statusLabel(a.status),a.fee,a.paymentStatus])));
  $('rp-pdf').onclick=()=>{ const pa=$('print-area')||document.body.appendChild(Object.assign(document.createElement('div'),{id:'print-area'})); pa.innerHTML=`<div style="font-family:Inter,sans-serif;padding:24px;color:#111;"><h2>${doc.name} — Report</h2><div>${niceDate(r.a)} to ${niceDate(r.b)}</div><table style="width:100%;border-collapse:collapse;margin-top:14px;font-size:13px;">${[['Appointments',r.rng.filter(x=>x.status!=='cancelled').length],['Completed',r.completed],['Cancelled',r.cancelled],['No-shows',r.noshow],['New patients',r.newP],['Returning patients',r.returning],['Revenue',money(r.fin.income)],['Pending payments',money(r.pend)],['Expenses',money(r.fin.expense)],['Net income',money(r.fin.profit)]].map(x=>`<tr><td style="border-bottom:1px solid #ddd;padding:8px;">${x[0]}</td><td style="border-bottom:1px solid #ddd;padding:8px;text-align:right;"><b>${x[1]}</b></td></tr>`).join('')}</table></div>`; window.print(); };
}

/* ---- booking page, QR, poster ---- */
function downloadBlob(blob,name){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },600); }
function posterCanvas(doc){
  const c=document.createElement('canvas'); c.width=1080; c.height=1528; const x=c.getContext('2d'); x.fillStyle='#fff'; x.fillRect(0,0,1080,1528); x.strokeStyle='#0E4F49'; x.lineWidth=16; x.strokeRect(24,24,1032,1480);
  x.textAlign='center'; x.fillStyle='#0E4F49'; x.font='bold 70px Georgia,serif'; x.fillText(unesc(doc.name),540,170); x.fillStyle='#444'; x.font='42px Arial,sans-serif'; x.fillText(unesc(doc.clinicName||doc.spec),540,240);
  x.fillStyle='#0E4F49'; const pw=700, ph=100; x.beginPath(); x.roundRect?x.roundRect(540-pw/2,300,pw,ph,50):x.rect(540-pw/2,300,pw,ph); x.fill(); x.fillStyle='#fff'; x.font='bold 50px Arial,sans-serif'; x.fillText('Scan to Book Appointment',540,368);
  const q=document.createElement('canvas'); QRGen.toCanvas(q,publicUrl(doc.slug),760,2); x.fillStyle='#fff'; x.fillRect(150,450,780,780); x.strokeStyle='#0E4F49'; x.lineWidth=6; x.strokeRect(146,446,788,788); x.imageSmoothingEnabled=false; x.drawImage(q,160,460,760,760);
  x.fillStyle='#111'; x.font='bold 54px Arial,sans-serif'; x.fillText('Book Your Appointment Online',540,1330); x.fillStyle='#777'; x.font='34px Arial,sans-serif'; x.fillText(publicUrl(doc.slug).replace(/^https?:\/\//,'').replace('#/','/'),540,1395); x.fillStyle='#0E4F49'; x.font='bold 36px Arial,sans-serif'; x.fillText(APP_CONFIG.brand.toUpperCase(),540,1462);
  return c;
}
function pdfFromJpeg(dataUrl,wpx,hpx){
  const bin=atob(dataUrl.split(',')[1]), img=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) img[i]=bin.charCodeAt(i);
  const PW=595.28, PH=841.89, s=Math.min((PW-60)/wpx,(PH-60)/hpx), w=wpx*s, h=hpx*s, ox=(PW-w)/2, oy=(PH-h)/2, enc=new TextEncoder(), parts=[], offs=[]; let len=0;
  const push=b=>{ const u=typeof b==='string'?enc.encode(b):b; parts.push(u); len+=u.length; };
  push('%PDF-1.4\n'); const obj=(n,body)=>{ offs[n]=len; push(n+' 0 obj\n'+body+'\nendobj\n'); };
  obj(1,'<< /Type /Catalog /Pages 2 0 R >>'); obj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  obj(3,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`);
  offs[4]=len; push(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${wpx} /Height ${hpx} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.length} >>\nstream\n`); push(img); push('\nendstream\nendobj\n');
  const content=`q ${w.toFixed(2)} 0 0 ${h.toFixed(2)} ${ox.toFixed(2)} ${oy.toFixed(2)} cm /Im0 Do Q`; obj(5,`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  const xref=len; push('xref\n0 6\n0000000000 65535 f \n'); for(let i=1;i<=5;i++) push(String(offs[i]).padStart(10,'0')+' 00000 n \n'); push(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
  return new Blob(parts,{type:'application/pdf'});
}
function posterHtml(doc){ return `<div class="poster"><div class="pn">${doc.name}</div><div class="pc">${doc.clinicName||doc.spec}</div><div class="scan">Scan to Book Appointment</div><div class="qrb">${QRGen.toSvg(publicUrl(doc.slug),{border:1})}</div><div class="sub2">Book Your Appointment Online</div><div class="brand">${APP_CONFIG.brand.toUpperCase()}</div></div>`; }
function renderAdminBooking(doc){
  const url=publicUrl(doc.slug), reason=bookingClosedReason(doc,state.platform.public), el=$('av-booking');
  el.innerHTML=`${reason?`<div class="banner warn">Booking page abhi band hai (${reason==='paused'?'aapne online booking pause ki hai':reason==='expired'?'subscription expire':'account inactive'}). QR scan karne par patient ko "unavailable" message dikhega.</div>`:''}
    <div class="card"><div class="section-label">Your booking page</div><div class="mono" style="word-break:break-all;font-size:14px;">${url}</div>
      <div class="row gap8 mt"><a class="btn btn-coral btn-sm" href="${url}" target="_blank" rel="noopener">Open</a><button class="btn btn-outline btn-sm" id="bk-copy">${ICONS.copy} Copy Link</button><button class="btn btn-outline btn-sm" id="bk-share">${ICONS.share} Share</button><button class="btn btn-outline btn-sm" id="bk-qr">Download QR</button></div></div>
    <div class="card mt"><div class="section-label">Clinic QR Poster</div><div id="poster-wrap">${posterHtml(doc)}</div>
      <div class="row gap8 mt" style="justify-content:center;"><button class="btn btn-coral btn-sm" id="ps-png">Download PNG</button><button class="btn btn-outline btn-sm" id="ps-pdf">Download PDF</button><button class="btn btn-outline btn-sm" id="ps-print">Print</button></div></div>`;
  el.insertAdjacentHTML('beforeend',reviewsCardHtml(doc)); bindReviewsCard(el);
  $('bk-copy').onclick=()=>copyText(url,ok=>toast(ok?'Link copied':'Copy nahi hua')); $('bk-share').onclick=()=>shareOrCopyLink(url,unesc(doc.name)+' — Book an Appointment','#/book/'+doc.slug);
  $('bk-qr').onclick=()=>{ const c=document.createElement('canvas'); QRGen.toCanvas(c,url,1000,3); c.toBlob(b=>downloadBlob(b,'qr-'+doc.slug+'.png')); };
  $('ps-png').onclick=()=>posterCanvas(doc).toBlob(b=>downloadBlob(b,'clinic-poster-'+doc.slug+'.png'));
  $('ps-pdf').onclick=()=>{ const c=posterCanvas(doc); downloadBlob(pdfFromJpeg(c.toDataURL('image/jpeg',0.95),c.width,c.height),'clinic-poster-'+doc.slug+'.pdf'); };
  $('ps-print').onclick=()=>{ const pa=$('print-area')||document.body.appendChild(Object.assign(document.createElement('div'),{id:'print-area'})); pa.innerHTML=posterHtml(doc); pa.querySelector('.poster').style.cssText='width:520px;margin:30px auto;'; window.print(); };
}

/* ---- settings ---- */
/* ---- danger zone: per-doctor data delete ---- */
function dataCategoryCounts(doc){
  return [
    {key:'appointments', label:'Appointments', count: state.appointments.filter(a=>a.doctorId===doc.id).length},
    {key:'histories', label:'Visit history & prescriptions', count: state.histories.filter(h=>h.doctorId===doc.id).length},
    {key:'payments', label:'Payments', count: state.payments.filter(p=>p.doctorId===doc.id).length},
    {key:'ledger', label:'Expense / ledger entries', count: state.ledger.filter(l=>l.doctorId===doc.id).length},
    {key:'documents', label:'Uploaded documents', count: state.documents.filter(x=>x.doctorId===doc.id).length},
    {key:'waitlist', label:'Waitlist entries', count: state.waitlist.filter(x=>x.doctorId===doc.id).length},
    {key:'patients', label:'Patient records', count: state.patients.filter(p=>p.doctorId===doc.id&&!p.deleted).length},
  ];
}
function confirmDeleteCategory(doc,key){
  const cats=dataCategoryCounts(doc), c=cats.find(x=>x.key===key); if(!c||!c.count) return;
  openModal(`<h3 style="color:var(--red);">Delete all ${c.label}?</h3>
    <div class="sub">${c.count} records permanently delete ho jayenge — sirf ${esc(unesc(doc.name))} ke liye. Ye wapas nahi aa sakta.</div>
    <div class="field"><label>Confirm karne ke liye "DELETE" type karein</label><input id="delc-confirm" autocomplete="off"></div>
    <div class="modal-actions"><button class="btn btn-outline" style="flex:1;" id="delc-no">Cancel</button><button class="btn btn-danger" style="flex:1;" id="delc-yes">Delete ${c.count} records</button></div>`);
  $('delc-no').onclick=closeModal;
  $('delc-yes').onclick=async()=>{
    if($('delc-confirm').value.trim().toUpperCase()!=='DELETE'){ toast('"DELETE" type karke confirm karein'); return; }
    const btn=$('delc-yes'); btn.disabled=true; btn.textContent='Deleting…';
    let removed=0, backup;
    if(key==='patients'){ backup=state.patients.filter(p=>p.doctorId===doc.id&&!p.deleted).map(p=>p); state.patients.forEach(p=>{ if(p.doctorId===doc.id&&!p.deleted){ p.deleted=true; removed++; } }); }
    else { backup=state[key].filter(x=>x.doctorId===doc.id); state[key]=state[key].filter(x=>{ const match=x.doctorId===doc.id; if(match) removed++; return !match; }); }
    const prevLog=doc.deletionLog; doc.deletionLog=(doc.deletionLog||[]).concat([{label:c.label,count:removed,at:new Date().toISOString(),by:session.email||session.phone||'doctor'}]).slice(-30);
    try{
      await saveNow();
      closeModal(); toast(c.label+' — '+removed+' records deleted'); renderAdmin();
    }catch(e){
      // rollback: server rejected the delete, so undo the local optimistic change instead of leaving it in a fake "deleted" state
      if(key==='patients'){ backup.forEach(p=>{ delete p.deleted; }); }
      else { state[key]=state[key].concat(backup); }
      doc.deletionLog=prevLog;
      btn.disabled=false; btn.textContent='Delete '+removed+' records';
      toast('Delete nahi hua — '+errMsg(e));
      console.error('Danger zone delete failed', key, e);
    }
  };
}
function renderAdminSettings(doc){
  const st=Object.assign(defaultSettings(),doc.settings||{}), pm=doc.payMethods||defaultPayMethods(), el=$('av-settings');
  const delLog=doc.deletionLog||[];
  const delLogRows = delLog.slice().reverse().slice(0,10).map(l=>`<div class="detail-row"><span class="k">${niceDate((l.at||'').slice(0,10))} · ${new Date(l.at).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</span><span class="v">${l.label} · ${l.count} deleted</span></div>`).join('');
  const delLogHtml = delLog.length ? `<div class="section-label" style="margin-top:16px;">Recent deletions (history)</div>${delLogRows}` : '<div class="muted" style="margin-top:12px;">Abhi tak koi deletion nahi hua</div>';
  el.innerHTML=`<div class="card"><div class="section-label">Profile & clinic</div>
      <div class="field-row"><div class="field"><label>Doctor name</label><input id="st-name" value="${esc(unesc(doc.name))}"></div><div class="field"><label>Specialty</label><select id="st-spec">${specOptions(doc.spec)}</select></div></div>
      <div class="field-row"><div class="field"><label>Experience (years)</label><input type="number" id="st-exp" value="${doc.exp}"></div><div class="field"><label>Consultation fee (₹)</label><input type="number" id="st-fee" value="${doc.fee}"></div></div>
      <div class="field-row"><div class="field"><label>Emergency fee (₹)</label><input type="number" id="st-emfee" value="${doc.emFee!=null?doc.emFee:800}"></div><div class="field"></div></div>
      <div class="field"><label>About (shown on booking page)</label><textarea id="st-bio" rows="2">${doc.bio||''}</textarea></div>
      <div class="field-row"><div class="field"><label>Clinic name</label><input id="st-clinic" value="${esc(unesc(doc.clinicName||''))}"></div><div class="field"><label>Clinic phone</label><input id="st-cphone" value="${esc(doc.clinicPhone||'')}"></div></div>
      <div class="field"><label>Clinic address</label><input id="st-addr" value="${esc(unesc(doc.clinicAddress||''))}"></div>
      <div class="field-row"><div class="field"><label>Doctor photo</label><input type="file" id="st-photo" accept="image/*"></div><div class="field"><label>Clinic logo</label><input type="file" id="st-logo" accept="image/*"></div></div></div>
    <div class="card mt"><div class="section-label">Booking settings</div>
      <div class="field-row"><div class="field"><label>Advance booking (days)</label><input type="number" id="st-adv" min="1" value="${st.advanceDays}"></div><div class="field"><label>Stop booking before slot (minutes)</label><input type="number" id="st-cut" min="0" value="${st.cutoffMinutes||0}"></div></div>
      ${switchRow('st-book','Online booking ON','Band karne par booking page/QR "unavailable" dikhayega',st.bookingEnabled)}${switchRow('st-same','Same-day booking','',st.sameDay)}${switchRow('st-cancel','Patient can cancel','',st.allowCancel)}${switchRow('st-resch','Patient can reschedule','',st.allowReschedule)}
      ${switchRow('st-wait','Waitlist','Jab din full ho to patients waitlist join kar sakte hain',st.waitlist)}${switchRow('st-docs','Patient document upload','OTP verify karne ke baad patient reports upload kar sakta hai',st.docUpload)}${switchRow('st-symp','Symptoms / reason field','Booking form mein optional field',st.symptoms)}</div>
    <div class="card mt"><div class="section-label">Payments</div>${switchRow('st-upi','Online payment (UPI)','Patient ko UPI ID dikhegi; payment aap "Paid" mark karte hain',pm.upi&&pm.upi.enabled)}
      <div class="field"><label>UPI ID</label><input id="st-upiid" placeholder="name@bank" value="${esc((pm.upi&&pm.upi.upiId)||'')}"></div>${switchRow('st-cash','Cash at clinic','',pm.cash&&pm.cash.enabled)}
      <div class="row gap8 mt"><button class="btn btn-outline btn-sm" id="st-fees">Manage fee types</button></div></div>
    <div class="card mt"><div class="section-label">Notifications</div><div class="muted">WhatsApp / SMS / Email abhi connect nahi hain — app kisi message ko "sent" nahi dikhata. Provider jodne par booking, reminder, cancel, reschedule, payment aur waitlist messages chalu ho jayenge. Tab tak appointment details par "WhatsApp" button se manually bhej sakte hain.</div></div>
    <button class="btn btn-coral btn-block mt" id="st-save">Save settings</button>
    <div class="card mt" style="border:1px solid var(--red);"><div class="section-label" style="color:var(--red);">Danger Zone — Data Delete</div>
      <div class="muted" style="margin-bottom:10px;">Sirf ${esc(unesc(doc.name))} ka data delete hoga — dusre doctors ka data safe rahega. Ye action undo nahi ho sakta.</div>
      ${dataCategoryCounts(doc).map(c=>`<div class="detail-row"><span class="k">${c.label}<span class="muted" style="margin-left:6px;">(${c.count})</span></span><span class="v"><button class="btn btn-danger btn-sm" data-delcat="${c.key}" ${c.count?'':'disabled'}>Delete all</button></span></div>`).join('')}
      ${delLogHtml}</div>
    <div class="card mt"><div class="section-label">Account</div><div class="kv-list"><div class="r"><span>Login ID</span><span class="mono">${doc.loginId||'—'}</span></div><div class="r"><span>Email</span><span>${doc.email||'—'}</span></div></div>
      ${session.role==='doctor'?`<div class="field mt"><label>Current password</label><input type="password" id="pw-cur" autocomplete="current-password"></div><div class="field"><label>New password (min 8)</label><input type="password" id="pw-new" autocomplete="new-password"></div><button class="btn btn-outline" id="pw-go">Change password</button>`:'<div class="muted mt">Password sirf doctor khud badal sakta hai.</div>'}</div>`;
  el.querySelectorAll('[data-delcat]').forEach(b=>b.onclick=()=>confirmDeleteCategory(doc,b.dataset.delcat));
  $('st-save').onclick=async()=>{
    const name=$('st-name').value.trim(); if(!name){ toast('Naam daalein'); return; }
    Object.assign(doc,{name:esc(name),spec:$('st-spec').value,exp:Number($('st-exp').value)||0,fee:Number($('st-fee').value)||0,emFee:Number($('st-emfee').value)||800,bio:esc($('st-bio').value.trim()),clinicName:esc($('st-clinic').value.trim()),clinicPhone:$('st-cphone').value.trim(),clinicAddress:esc($('st-addr').value.trim())});
    if(doc.fees&&doc.fees[0]) doc.fees[0].amount=doc.fee;
    doc.settings={advanceDays:Math.max(1,Number($('st-adv').value)||14),cutoffMinutes:Math.max(0,Number($('st-cut').value)||0),bookingEnabled:$('st-book').checked,sameDay:$('st-same').checked,allowCancel:$('st-cancel').checked,allowReschedule:$('st-resch').checked,waitlist:$('st-wait').checked,docUpload:$('st-docs').checked,symptoms:$('st-symp').checked};
    doc.payMethods=Object.assign({},pm,{upi:{enabled:$('st-upi').checked,upiId:$('st-upiid').value.trim()},cash:{enabled:$('st-cash').checked}});
    const ph=$('st-photo').files[0], lg=$('st-logo').files[0]; if(ph) doc.photoDataUrl=await fileToDataUrl(ph,320,0.8); if(lg) doc.logoDataUrl=await fileToDataUrl(lg,256,0.85);
    await saveState(); toast('Settings saved'); renderAdmin(); };
  $('st-fees').onclick=()=>openFeeManagerModal(doc);
  const pw=$('pw-go'); if(pw) pw.onclick=async()=>{ const n=$('pw-new').value; if(n.length<8){ toast('Naya password kam se kam 8 characters ka ho'); return; } try{ await Backend.changePassword($('pw-cur').value,n); toast('Password updated'); $('pw-cur').value=''; $('pw-new').value=''; }catch(e){ toast(errMsg(e)); } };
}

/* ================= PATIENT EXPERIENCE (no login to book; OTP for "My Appointment") ================= */
Object.assign(STRINGS.hi,{ bookAppt:'अपॉइंटमेंट बुक करें', chooseDate:'तारीख चुनें', chooseTime:'समय चुनें', yourDetails2:'आपकी जानकारी', symptoms:'लक्षण / आने का कारण (वैकल्पिक)', symptomsHelp:'डॉक्टर को संक्षेप में बताएं कि आप क्यों आ रहे हैं।', someoneElse:'किसी और के लिए बुक कर रहे हैं?', gender:'लिंग (वैकल्पिक)', back:'वापस', next:'आगे',
  confirmed:'अपॉइंटमेंट बुक हो गई', token:'टोकन', apptId:'अपॉइंटमेंट ID', addCal:'कैलेंडर में जोड़ें', share:'शेयर करें', cancel:'रद्द करें', view:'मेरी अपॉइंटमेंट', full:'इस दिन की सभी अपॉइंटमेंट बुक हो चुकी हैं।', unavailable:'यह डॉक्टर अभी ऑनलाइन बुकिंग नहीं ले रहे हैं', sendOtp:'OTP भेजें', verify:'वेरिफाई करें', enterPhone:'अपना मोबाइल नंबर डालें', enterOtp:'OTP डालें', logout:'लॉगआउट', pay:'भुगतान', payClinic:'क्लिनिक पर भुगतान करें', off:'बंद',
  checkStatus:'स्थिति देखें', enterApptId:'अपॉइंटमेंट ID डालें (जैसे AD-XXXXXX)', apptNotFound:'यह मोबाइल नंबर और अपॉइंटमेंट ID मेल नहीं खाते',
  runningToken:'अभी चल रहा टोकन' });
Object.assign(STRINGS.en,{ bookAppt:'BOOK APPOINTMENT', chooseDate:'Choose a date', chooseTime:'Choose a time', yourDetails2:'Your details', symptoms:'Symptoms / Reason for Visit (Optional)', symptomsHelp:'Briefly tell the doctor why you are visiting.', someoneElse:'Booking for someone else?', gender:'Gender (optional)', back:'Back', next:'Next',
  confirmed:'Appointment confirmed', token:'Token', apptId:'Appointment ID', addCal:'Add to Calendar', share:'Share', cancel:'Cancel', view:'My Appointments', full:'All appointments are booked for this day.', unavailable:'This doctor is not taking online bookings right now', sendOtp:'Send OTP', verify:'Verify', enterPhone:'Enter your mobile number', enterOtp:'Enter OTP', logout:'Logout', pay:'Payment', payClinic:'Pay at the clinic', off:'Off',
  checkStatus:'Check Status', enterApptId:'Enter Appointment ID (e.g. AD-XXXXXX)', apptNotFound:'This mobile number and Appointment ID do not match',
  runningToken:'Now Serving' });
const isRealPatientPage=()=>!ui.previewMode;
function docRatingStats(doctorId){ const rs=state.reviews.filter(r=>r.doctorId===doctorId&&!r.hidden); if(!rs.length) return {avg:0,count:0}; return {avg:(rs.reduce((s,r)=>s+r.rating,0)/rs.length).toFixed(1),count:rs.length}; }
function langBtn(){ return `<button class="btn btn-outline btn-sm" id="lang-toggle">${t('langToggle')}</button>`; }
function bindLang(rerender){ const b=$('lang-toggle'); if(b) b.onclick=()=>{ ui.lang=ui.lang==='hi'?'en':'hi'; rerender(); }; }
function unavailableHtml(reason,doc){
  const msg={not_found:'Ye booking page nahi mila. Link ya QR code check karein.',inactive:'This doctor is not accepting online bookings right now.',paused:'Online booking is temporarily paused by the clinic.',expired:'Online booking is currently unavailable for this clinic.'}[reason]||'Booking unavailable';
  return `<div class="card" style="text-align:center;padding:30px 20px;">${ICONS.shield}<h3 style="margin-top:10px;">${t('unavailable')}</h3><div class="muted" style="margin-top:6px;">${msg}</div>${doc&&doc.clinicPhone&&reason!=='not_found'?`<a class="btn btn-coral mt" href="tel:${doc.clinicPhone}">Call clinic: ${doc.clinicPhone}</a>`:''}</div>`;
}
function profileHtml(doc){
  const rt=docRatingStats(doc.id);
  return `<div class="card" style="text-align:center;">${avatarHtml(doc,'doc-avatar','width:84px;height:84px;font-size:28px;margin:0 auto 10px;')}<h2 style="font-size:24px;">${doc.name}</h2><div class="muted">${doc.spec}${doc.exp?' · '+doc.exp+' yrs experience':''}</div>
    ${rt.count?`<div style="margin-top:6px;">${starsDisplay(rt.avg)} <b>${rt.avg}</b> <span class="muted">(${rt.count} reviews)</span></div>`:''}
    <div style="margin-top:10px;font-weight:600;">${doc.clinicName||''}</div><div class="muted">${doc.clinicAddress||''}</div><div style="margin-top:8px;font-size:18px;font-weight:700;color:var(--teal);">${money(doc.fee)} <span class="muted" style="font-weight:500;">consultation</span></div></div>`;
}
function renderPublic(){
  const r=ui.route, doc=r.doctorId&&docById(r.doctorId), root=$('root');
  if(!doc||r.notFound){ root.innerHTML=`<div class="pubwrap">${unavailableHtml('not_found')}<div style="text-align:center;margin-top:14px;"><a href="#/" class="muted">← Home</a></div></div>`; return; }
  mountPublic(doc,false);
}
function renderPublicInline(doc,preview){ mountPublic(doc,preview); }
function mountPublic(doc,preview){
  const root=$('root'), reason=bookingClosedReason(doc,state.platform.public), bk=ui.bk&&ui.bk.doctorId===doc.id?ui.bk:(ui.bk={doctorId:doc.id,step:1,date:null,time:null,form:{name:'',phone:'',age:'',gender:'',reason:'',other:false,relation:'Father',otherName:''},usage:null});
  if(session.role==='patient'&&!bk.form.phone) bk.form.phone=session.phone;
  const revs=state.reviews.filter(x=>x.doctorId===doc.id&&!x.hidden).sort((a,b)=>(b.date||'').localeCompare(a.date||'')).slice(0,6);
  root.innerHTML=`${preview?`<div class="banner ok" style="margin:0;border-radius:0;position:sticky;top:0;z-index:100;"><span>Preview — patients aisa page dekhte hain. Booking yahan submit nahi hoti.</span><button class="btn btn-coral btn-sm" id="exit-prev">Exit preview</button></div>`:''}
    <div class="pubwrap"><div class="row" style="justify-content:space-between;align-items:center;margin-bottom:10px;"><a href="#/" class="muted" style="font-weight:600;">${APP_CONFIG.brand}</a>${langBtn()}</div>
    ${profileHtml(doc)}<div id="bk-area" class="mt">${reason?unavailableHtml(reason,doc):''}</div>
    ${!reason&&!preview?`<div style="text-align:center;margin-top:16px;"><a class="btn btn-ghost btn-sm" href="#/my/${doc.slug}">${t('checkBooked')}</a></div>`:''}
    ${revs.length?`<div class="section-label mt">${t('patientReviews')}</div>${revs.map(x=>`<div class="card" style="margin-bottom:8px;"><div>${starsDisplay(x.rating)} <b>${x.patientName||''}</b></div>${x.text?`<div class="muted" style="margin-top:4px;">${x.text}</div>`:''}</div>`).join('')}`:''}</div>`;
  bindLang(()=>mountPublic(doc,preview)); const ex=$('exit-prev'); if(ex) ex.onclick=()=>{ ui.previewMode=false; renderAdmin(); };
  if(!reason) drawBooking(doc,preview);
}
function dateStripHtml(doc,sel){
  const st=Object.assign(defaultSettings(),doc.settings||{}), out=[]; const n=Number(st.advanceDays)||14;
  for(let i=0;i<=n;i++){ const ds=addDays(todayStr(),i); if(i===0&&st.sameDay===false) continue; const av=computeAvailability(doc,ds,{}); const off=av.closed; out.push(`<button class="date-pill ${ds===sel?'picked':''}" data-date="${ds}" ${off?'disabled style="opacity:.4"':''}><div class="dow">${dow(ds)}</div><div class="dnum">${new Date(ds+'T00:00:00').getDate()}</div><div class="dow" style="font-size:9px;">${off?t('off'):new Date(ds+'T00:00:00').toLocaleDateString('en-IN',{month:'short'})}</div></button>`); }
  return `<div class="date-strip">${out.join('')}</div>`;
}
async function drawBooking(doc,preview){
  const bk=ui.bk, area=$('bk-area'), st=Object.assign(defaultSettings(),doc.settings||{}); if(!area) return;
  const steps=`<div class="wiz-steps">${[1,2,3].map(i=>`<div class="${i<bk.step?'done':i===bk.step?'on':''}"></div>`).join('')}</div>`;
  if(bk.step===1){
    area.innerHTML=`<div class="card">${steps}<div class="section-label">1 · ${t('chooseDate')}</div>${dateStripHtml(doc,bk.date)}<div id="day-msg"></div></div>`;
    area.querySelectorAll('[data-date]').forEach(b=>b.onclick=async()=>{ bk.date=b.dataset.date; bk.time=null; bk.usage=await Backend.getSlotUsage(doc.id,bk.date); const av=computeAvailability(doc,bk.date,bk.usage); if(av.full||av.dayFull){ area.querySelectorAll('.date-pill').forEach(x=>x.classList.toggle('picked',x===b)); $('day-msg').innerHTML=`<div class="banner warn" style="margin-top:12px;"><span>${t('full')}</span></div>${st.waitlist?`<button class="bigbtn" id="join-wl" style="margin-top:6px;">JOIN WAITLIST</button>`:''}`; const w=$('join-wl'); if(w) w.onclick=()=>openWaitlistModal(doc,bk.date,preview); return; } bk.step=2; drawBooking(doc,preview); });
  } else if(bk.step===2){
    const usage=bk.usage||(bk.usage=await Backend.getSlotUsage(doc.id,bk.date)), av=computeAvailability(doc,bk.date,usage), tokenWise=!!docSchedule(doc).tokenWise;
    const slotLabel=s=>tokenWise?tokenLabel(s.tokenIdx):fmt12(s.time);
    const morning=av.slots.filter(s=>toMin(s.time)<720), afternoon=av.slots.filter(s=>toMin(s.time)>=720&&toMin(s.time)<1020), eve=av.slots.filter(s=>toMin(s.time)>=1020);
    const grp=(l,a)=>a.length?`<div class="section-label" style="margin-top:12px;">${l}</div><div class="slot-grid">${a.map(s=>{
      const label = s.skipped ? 'Skip' : s.cancelled ? 'Cancelled' : slotLabel(s);
      const disabled = !s.free;
      const cls = ['slot', disabled?'taken':'', s.completed?'completed':'', s.skipped?'skipped':'', s.cancelled?'cancelled':''].filter(Boolean).join(' ');
      const style = s.completed ? 'text-decoration:line-through;opacity:.65;' : 'text-decoration:none;';
      const title = s.completed?'Complete ho chuka hai':s.skipped?'Skip ho gaya tha':s.cancelled?'Cancel ho gayi thi — dobara book kar sakte hain':s.past?'Doctor ki shift khatam ho gayi hai':fmt12(s.time);
      return `<button class="${cls}" ${disabled?'disabled':''} style="${style}" title="${title}" data-time="${s.time}">${label}</button>`;
    }).join('')}</div>`:'';
    area.innerHTML=`<div class="card">${steps}<div class="section-label">2 · ${t('chooseTime')} — ${niceDate(bk.date)}</div>${tokenWise?`<div class="muted" style="margin-bottom:2px;">Token number chunein — samay clinic mein turn aane par pata chalega</div>`:''}${av.closed?`<div class="muted">${av.label||'Is din appointments available nahi'}</div>`:grp('Morning',morning)+grp('Afternoon',afternoon)+grp('Evening',eve)}<button class="btn btn-ghost btn-sm mt" id="bk-back">← ${t('changeDate')}</button></div>`;
    $('bk-back').onclick=()=>{ bk.step=1; drawBooking(doc,preview); }; area.querySelectorAll('[data-time]').forEach(b=>b.onclick=()=>{ bk.time=b.dataset.time; bk.step=3; drawBooking(doc,preview); });
  } else {
    const f=bk.form, fam=session.role==='patient'?state.familyMembers.filter(m=>m.ownerPhone===session.phone):[], tokenWise3=!!docSchedule(doc).tokenWise;
    const timeSlotLabel=(()=>{ if(!tokenWise3) return fmt12(bk.time); const times=baseSlots(doc,bk.date), i=times.indexOf(bk.time); return tokenLabel(i>=0?i+1:1); })();
    area.innerHTML=`<div class="card">${steps}<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"><div class="section-label" style="margin:0;">3 · ${t('yourDetails2')}</div><button class="btn btn-outline btn-sm" id="bk-back">← ${t('back')}</button></div><div class="banner ok" style="margin-bottom:12px;"><span>${dow(bk.date)}, ${niceDate(bk.date)} · <b>${timeSlotLabel}</b></span></div>
      <div class="field"><label>${t('fullName')}</label><input id="bf-name" autocomplete="name" value="${esc(unesc(f.name))}"></div>
      <div class="field"><label>${t('phoneNumber')}</label><input id="bf-phone" inputmode="numeric" autocomplete="tel" maxlength="14" value="${f.phone}" ${session.role==='patient'?'disabled':''}></div>
      <div class="field-row"><div class="field"><label>${t('age')}</label><input type="number" id="bf-age" value="${f.age}"></div><div class="field"><label>${t('gender')}</label><select id="bf-gender"><option value="">—</option>${['Male','Female','Other'].map(g=>`<option ${f.gender===g?'selected':''}>${g}</option>`).join('')}</select></div></div>
      ${st.symptoms!==false?`<div class="field"><label>${t('symptoms')}</label><textarea id="bf-reason" rows="2" maxlength="300">${f.reason}</textarea><div class="muted" style="margin-top:4px;">${t('symptomsHelp')}</div></div>`:''}
      <details ${f.other?'open':''} id="bf-other-d" style="margin-bottom:14px;"><summary style="cursor:pointer;font-weight:600;color:var(--teal);">${t('someoneElse')}</summary><div style="margin-top:10px;">
        ${fam.length?`<div class="chips">${fam.map(m=>`<button class="chip" data-fam="${m.id}">${m.name} (${m.relation})</button>`).join('')}</div>`:''}
        <div class="field-row"><div class="field"><label>Relation</label><select id="bf-rel">${['Father','Mother','Spouse','Child','Other'].map(r=>`<option ${f.relation===r?'selected':''}>${r}</option>`).join('')}</select></div><div class="field"><label>Patient's name</label><input id="bf-oname" value="${esc(unesc(f.otherName))}"></div></div></div></details>
      ${preview?`<div class="banner warn"><span>${t('previewNote')}</span></div>`:''}
      <button class="bigbtn" id="bf-go" ${preview?'disabled':''}>${t('bookAppt')}</button><div class="muted" style="text-align:center;margin-top:8px;">${money(doc.fee)} · ${t('payClinic')}</div></div>`;
    const grab=()=>{ f.name=$('bf-name').value.trim(); f.phone=$('bf-phone').value.trim(); f.age=$('bf-age').value.trim(); f.gender=$('bf-gender').value; if($('bf-reason')) f.reason=$('bf-reason').value.trim(); f.other=$('bf-other-d').open; f.relation=$('bf-rel').value; f.otherName=$('bf-oname').value.trim(); };
    $('bk-back').onclick=()=>{ grab(); bk.step=2; drawBooking(doc,preview); };
    area.querySelectorAll('[data-fam]').forEach(b=>b.onclick=()=>{ const m=state.familyMembers.find(x=>x.id===b.dataset.fam); $('bf-rel').value=m.relation; $('bf-oname').value=unesc(m.name); });
    $('bf-go').onclick=async()=>{
      grab(); const otherOn=f.other&&f.otherName; const name=otherOn?f.otherName:f.name;
      if(f.name.length<2){ toast('Apna poora naam daalein'); return; } if(!validPhone(f.phone)){ toast('Sahi 10-digit mobile number daalein'); return; } if(f.other&&!f.otherName){ toast('Jis mareez ke liye book kar rahe hain unka naam daalein'); return; }
      const btn=$('bf-go'); btn.disabled=true; btn.textContent='…';
      try{
        const appt=await Backend.bookAppointment({doctorId:doc.id,date:bk.date,time:bk.time,source:'patient',patient:{name:f.name,phone:f.phone,age:f.age,gender:f.gender,reason:st.symptoms!==false?f.reason:'',bookedFor:otherOn?{relation:f.relation,name:f.otherName}:{relation:'Self',name:f.name}}});
        if(!state.appointments.find(x=>x.id===appt.id)) state.appointments.push(appt);
        ui.justBooked=appt.id; ui.bk=null; Notify.trigger('booking',doc,appt); location.hash='#/appt/'+doc.slug+'/'+apptKey(appt);
      }catch(e){ btn.disabled=false; btn.textContent=t('bookAppt'); toast(errMsg(e)); if(/slot|full|booked/i.test(e.code+e.message)||e.code==='app/slot_taken'){ bk.step=2; bk.usage=null; drawBooking(doc,preview); } }
    };
  }
}
function openWaitlistModal(doc,date,preview){
  openModal(`<h3>${t('joinWaitlist')}</h3><div class="sub">${niceDate(date)} · ${t('waitlistNote')}</div><div class="field"><label>${t('fullName')}</label><input id="wl-n"></div><div class="field"><label>${t('phoneNumber')}</label><input id="wl-p" inputmode="numeric"></div><button class="bigbtn" id="wl-go" ${preview?'disabled':''}>JOIN WAITLIST</button>`);
  $('wl-go').onclick=async()=>{ const n=$('wl-n').value.trim(), p=$('wl-p').value; if(n.length<2||!validPhone(p)){ toast('Naam aur sahi mobile number daalein'); return; } try{ await Backend.joinWaitlist({doctorId:doc.id,date,name:n,phone:p}); closeModal(); toast(t('onWaitlist')); Notify.trigger('waitlist_joined',doc,{patientName:n,patientPhone:normPhone(p),date}); }catch(e){ toast(errMsg(e)); } };
}

/* ---- confirmation / view appointment (tokenized by unguessable appointment id) ---- */
function renderApptPage(){
  const r=ui.route, doc=r.doctorId&&docById(r.doctorId), root=$('root'), a=r.appt||state.appointments.find(x=>x.id===r.apptId);
  if(!doc||!a||a.doctorId!==doc.id){ root.innerHTML=`<div class="pubwrap"><div class="card" style="text-align:center;padding:30px;"><h3>Appointment nahi mili</h3><div class="muted mt">Link sahi hai? Ya apne mobile number + OTP se "My Appointments" kholein.</div>${doc?`<a class="btn btn-coral mt" href="#/my/${doc.slug}">${t('view')}</a>`:''}</div></div>`; return; }
  const st=migrateStatus(a.status), open=isOpenStatus(st), canChange=['booked','confirmed'].includes(st), set=Object.assign(defaultSettings(),doc.settings||{}), pm=doc.payMethods||{}, isNew=ui.justBooked===a.id;
  const upi=pm.upi&&pm.upi.enabled&&pm.upi.upiId?`upi://pay?pa=${encodeURIComponent(pm.upi.upiId)}&pn=${encodeURIComponent(unesc(doc.name))}&am=${a.fee}&cu=INR&tn=${encodeURIComponent('Appointment '+apptCode(a.id))}`:null;
  root.innerHTML=`<div class="pubwrap"><div class="row" style="justify-content:space-between;align-items:center;margin-bottom:10px;"><a href="#/book/${doc.slug}" class="muted" style="font-weight:600;">← ${doc.name}</a>${langBtn()}</div>
    <div class="confirm-card">${st==='cancelled'?`<div class="status-badge st-cancelled" style="font-size:14px;">Cancelled</div>`:`<div class="pay-success" style="margin-bottom:6px;"><div class="tick">${ICONS.check}</div></div><h2 style="font-size:22px;">${isNew?t('confirmed'):statusLabel(st)}</h2>`}
      <div class="muted" style="margin-top:14px;">${t('token')}</div><div class="tok">${tokenLabel(a.tokenNo)}</div>
      <div class="mt" id="running-token-wrap" style="${a.date===todayStr()&&r.currentToken?'':'display:none;'}"><div class="muted" style="margin-bottom:6px;">${t('runningToken')}</div><div class="running-token-circle" id="running-token-val">${a.date===todayStr()&&r.currentToken?tokenLabel(r.currentToken):''}</div></div></div>
    <div class="card mt"><div class="kv-list"><div class="r"><span>Doctor</span><span>${doc.name}</span></div><div class="r"><span>Clinic</span><span>${doc.clinicName||'—'}</span></div><div class="r"><span>Date</span><span>${dow(a.date)}, ${niceDate(a.date)}</span></div><div class="r"><span>Time</span><span>${fmt12(a.time)}</span></div>
      <div class="r"><span>Patient</span><span>${a.bookedFor&&a.bookedFor.relation&&a.bookedFor.relation!=='Self'?a.bookedFor.name+' ('+a.bookedFor.relation+')':a.patientName}</span></div><div class="r"><span>${t('apptId')}</span><span class="mono">${apptCode(a.id)}</span></div>
      <div class="r"><span>Fee</span><span>${money(a.fee)} · ${a.paymentStatus==='paid'?'<b style="color:var(--teal)">Paid</b>':t('payClinic')}</span></div></div>
      ${doc.clinicAddress?`<div class="muted mt">${ICONS.pin||''} ${doc.clinicAddress}</div>`:''}</div>
    ${open?`<div class="card mt" style="display:grid;gap:10px;">${upi&&a.paymentStatus!=='paid'?`<a class="btn btn-outline btn-block" href="${upi}">Pay via UPI (${esc(pm.upi.upiId)})</a><div class="muted" style="text-align:center;">UPI se pay karne ke baad clinic payment confirm karegi.</div>`:''}
      <button class="btn btn-coral btn-block" id="ap-cal">${t('addCal')}</button><button class="btn btn-outline btn-block" id="ap-share">${t('share')}</button>
      ${set.allowReschedule&&canChange?`<button class="btn btn-outline btn-block" id="ap-res">${t('reschedule')}</button>`:''}${set.allowCancel&&canChange?`<button class="btn btn-danger btn-block" id="ap-cancel">${t('cancel')}</button>`:''}</div>
      <div class="muted" style="text-align:center;margin-top:10px;">Is link ko sambhal ke rakhein — ye aapki appointment kholta hai.</div>`:`<div style="text-align:center;margin-top:14px;"><a class="btn btn-coral" href="#/book/${doc.slug}">${t('bookNewAppointment')}</a></div>`}</div>`;
  bindLang(renderApptPage);
  const g=$; if(g('ap-cal')) g('ap-cal').onclick=()=>downloadBlob(new Blob([icsFor(doc,a)],{type:'text/calendar'}),'appointment-'+apptCode(a.id)+'.ics');
  if(g('ap-share')) g('ap-share').onclick=()=>shareOrCopyLink(apptUrl(doc.slug,apptKey(a)),'Appointment with '+unesc(doc.name)+' — '+niceDate(a.date)+' '+fmt12(a.time),'#/appt/'+doc.slug+'/'+apptKey(a));
  if(g('ap-res')) g('ap-res').onclick=()=>openRescheduleModal(doc,a,()=>renderApptPage(),true);
  if(g('ap-cancel')) g('ap-cancel').onclick=()=>{ openModal(`<h3>Cancel appointment?</h3><div class="sub">${niceDate(a.date)}, ${fmt12(a.time)} — ye slot doosre patient ko mil jayega.</div><div class="modal-actions"><button class="btn btn-outline" style="flex:1;" id="cn-no">Keep</button><button class="btn btn-danger" style="flex:1;" id="cn-yes">Yes, cancel</button></div>`); $('cn-no').onclick=closeModal; $('cn-yes').onclick=async()=>{ try{ await Backend.cancelAppointment(doc.id,a.id,'patient'); a.status='cancelled'; closeModal(); toast('Appointment cancel ho gayi'); Notify.trigger('cancellation',doc,a); renderApptPage(); }catch(e){ toast(errMsg(e)); } }; };
}

/* ---- My Appointment (mobile + OTP) ---- */
function renderMyPortal(){
  const r=ui.route, doc=r.doctorId&&docById(r.doctorId), root=$('root');
  if(!doc){ root.innerHTML=`<div class="pubwrap">${unavailableHtml('not_found')}</div>`; return; }
  if(session.role!=='patient'){
    root.innerHTML=`<div class="pubwrap"><div class="row" style="justify-content:space-between;align-items:center;margin-bottom:10px;"><a href="#/book/${doc.slug}" class="muted" style="font-weight:600;">← ${doc.name}</a>${langBtn()}</div>
      <div class="card"><h3>${t('view')}</h3>
        <a class="btn btn-coral btn-block mt" href="#/book/${doc.slug}">${t('bookNewAppointment')}</a>
        ${doc.clinicPhone?`<a class="btn btn-outline btn-block mt" href="tel:${doc.clinicPhone}">Clinic ko call karein: ${doc.clinicPhone}</a>`:''}</div>
      <div class="card mt">
        <div class="section-label">${t('checkStatus')}</div>
        <div class="field mt"><label>${t('enterPhone')}</label><input id="ck-phone" inputmode="numeric" maxlength="14" placeholder="10-digit mobile"></div>
        <div class="field"><label>${t('apptId')}</label><input id="ck-code" maxlength="12" placeholder="AD-XXXXXX" style="text-transform:uppercase;"></div>
        <div id="ck-err" class="muted" style="color:var(--coral);display:none;margin-bottom:8px;"></div>
        <button class="bigbtn" id="ck-go">${t('checkStatus')}</button>
      </div>
      ${OTP_MSG_ENABLED?`<details class="card mt"><summary style="cursor:pointer;font-weight:600;color:var(--teal);">Mobile OTP se try karein</summary>
        <div class="sub mt">${t('enterPhone')}</div><div class="field mt"><input id="op-phone" inputmode="numeric" maxlength="14" placeholder="10-digit mobile"></div><button class="bigbtn" id="op-send">${t('sendOtp')}</button>
        <div id="op-step2" class="hide mt"><div id="op-demo"></div><div class="field"><label>${t('enterOtp')}</label><input id="op-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code"></div><button class="bigbtn" id="op-verify" style="background:var(--teal);">${t('verify')}</button></div></details>`:''}</div>`;
    bindLang(renderMyPortal);
    $('ck-go').onclick=async()=>{
      const phone=$('ck-phone').value, code=$('ck-code').value, err=$('ck-err'), btn=$('ck-go');
      err.style.display='none';
      if(!validPhone(phone)||!code.trim()){ err.textContent=t('enterPhone')+' / '+t('apptId'); err.style.display='block'; return; }
      btn.disabled=true;
      try{
        const a=await Backend.findByCode(doc.id,code,phone);
        if(!a){ err.textContent=t('apptNotFound'); err.style.display='block'; }
        else { if(!state.appointments.find(x=>x.id===a.id)) state.appointments.push(a); location.hash='#/appt/'+doc.slug+'/'+apptKey(a); }
      } catch(e){ err.textContent=errMsg(e); err.style.display='block'; }
      btn.disabled=false;
    };
    if(OTP_MSG_ENABLED){
    $('op-send').onclick=async()=>{ const p=$('op-phone').value; if(!validPhone(p)){ toast('Sahi 10-digit mobile number daalein'); return; } const b=$('op-send'); b.disabled=true;
      try{ const res=await Backend.phoneStart(p); ui.otpPhone=normPhone(p); $('op-step2').classList.remove('hide'); if(res&&res.demoCode) $('op-demo').innerHTML=`<div class="banner warn"><span>Demo OTP: <b class="mono">${res.demoCode}</b> (live mode mein SMS aayega)</span></div>`; toast('OTP bhej diya gaya'); }
      catch(e){
        if(e.code==='auth/operation-not-allowed'){
          openModal(`<h3>OTP abhi available nahi hai</h3><div class="sub">Clinic ne SMS verification abhi chalu nahi kiya. Apna confirmation link dobara kholein, ya clinic ko seedha call karein${doc.clinicPhone?' ('+doc.clinicPhone+')':''}.</div>
            ${doc.clinicPhone?`<a class="btn btn-coral btn-block mt" href="tel:${doc.clinicPhone}">Call clinic</a>`:''}`);
        } else toast(errMsg(e));
      }
      b.disabled=false; };
    $('op-verify').onclick=async()=>{ try{ await Backend.phoneVerify($('op-code').value); await enterRoute(); }catch(e){ toast(errMsg(e)); } };
    }
    return;
  }
  const phone=session.phone, mine=state.appointments.filter(a=>a.doctorId===doc.id&&a.patientPhone===phone).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
  const fam=state.familyMembers.filter(m=>m.ownerPhone===phone), docs=state.documents.filter(d=>d.doctorId===doc.id&&d.patientPhone===phone), set=Object.assign(defaultSettings(),doc.settings||{});
  const reviewable=mine.filter(a=>a.status==='completed'&&!state.reviews.some(x=>x.id===a.id));
  root.innerHTML=`<div class="pubwrap"><div class="row" style="justify-content:space-between;align-items:center;margin-bottom:10px;"><a href="#/book/${doc.slug}" class="muted" style="font-weight:600;">← ${doc.name}</a><div class="row gap8">${langBtn()}<button class="btn btn-ghost btn-sm" id="my-out">${t('logout')}</button></div></div>
    <div class="card"><div class="muted">${maskPhone(phone)}</div><h3>${t('myAppointments')}</h3><a class="btn btn-coral btn-sm mt" href="#/book/${doc.slug}">${t('bookNewAppointment')}</a></div>
    ${reviewable.length?`<div class="banner ok mt"><span>${t('reviewBanner')}</span><button class="btn btn-coral btn-sm" id="my-rev">${t('writeReview')}</button></div>`:''}
    <div class="mt">${mine.length?mine.map(a=>`<div class="acard" onclick="location.hash='#/appt/${doc.slug}/${apptKey(a)}'" style="cursor:pointer;"><div class="tk">${tokenLabel(a.tokenNo)}<small>${fmt12(a.time)}</small></div><div class="mid"><b>${niceDate(a.date)}</b><span>${a.bookedFor&&a.bookedFor.relation&&a.bookedFor.relation!=='Self'?a.bookedFor.name+' ('+a.bookedFor.relation+')':a.patientName}</span><div style="margin-top:5px;">${statusBadge(a.status)}</div></div></div>`).join(''):`<div class="card">${emptyBox(t('noAppointments'),'calendar')}</div>`}</div>
    <div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">${t('familyMembers')}<button class="btn btn-outline btn-sm" id="my-fam">${ICONS.plus} ${t('addMember')}</button></div>${fam.length?fam.map(m=>`<div class="detail-row"><span class="k">${m.name}</span><span class="v">${m.relation} <button class="btn btn-ghost btn-sm" data-delfam="${m.id}">${ICONS.trash}</button></span></div>`).join(''):'<div class="muted">—</div>'}</div>
    ${set.docUpload!==false?`<div class="card mt"><div class="section-label" style="display:flex;justify-content:space-between;align-items:center;">${t('myDocuments')}<button class="btn btn-outline btn-sm" id="my-doc">${ICONS.plus} ${t('addDocument')}</button></div>${docs.length?docs.map(d=>`<div class="detail-row" data-doc="${d.id}" style="cursor:pointer;"><span class="k">${d.name}</span><span class="v">${niceDate((d.uploadedAt||'').slice(0,10))}</span></div>`).join(''):`<div class="muted">${t('noDocuments')}</div>`}</div>`:''}</div>`;
  bindLang(renderMyPortal); $('my-out').onclick=async()=>{ await Backend.signOut(); clearState(); await enterRoute(); };
  $('my-fam').onclick=()=>{ openModal(`<h3>${t('addMember')}</h3><div class="field"><label>${t('fullName')}</label><input id="fm-n"></div><div class="field"><label>Relation</label><select id="fm-r">${['Father','Mother','Spouse','Child','Other'].map(x=>`<option>${x}</option>`).join('')}</select></div><button class="btn btn-coral btn-block" id="fm-go">Save</button>`); $('fm-go').onclick=async()=>{ const n=$('fm-n').value.trim(); if(!n) return; state.familyMembers.push({id:uid(),ownerPhone:phone,name:esc(n),relation:$('fm-r').value}); await saveState(); closeModal(); renderMyPortal(); }; };
  document.querySelectorAll('[data-delfam]').forEach(b=>b.onclick=async()=>{ state.familyMembers=state.familyMembers.filter(x=>x.id!==b.dataset.delfam); await saveState(); renderMyPortal(); });
  const md=$('my-doc'); if(md) md.onclick=()=>openDocumentModal(doc,{name:'',phone},'patient',()=>renderMyPortal());
  document.querySelectorAll('[data-doc]').forEach(c=>c.onclick=()=>openDocumentPreview(state.documents.find(x=>x.id===c.dataset.doc)));
  const rv=$('my-rev'); if(rv) rv.onclick=()=>openReviewModal(doc,reviewable[0]);
}
function openReviewModal(doc,a){
  let rating=5;
  openModal(`<h3>${t('rateExperience')}</h3><div class="sub">${doc.name} · ${niceDate(a.date)}</div><div id="rv-stars" style="font-size:34px;text-align:center;letter-spacing:6px;cursor:pointer;margin:14px 0;"></div><div class="field"><textarea id="rv-t" rows="3" maxlength="400" placeholder="Optional"></textarea></div><button class="btn btn-coral btn-block" id="rv-go">${t('submitReview')}</button>`);
  const draw=()=>{ $('rv-stars').innerHTML=[1,2,3,4,5].map(i=>`<span data-s="${i}" style="color:${i<=rating?'#E8A33D':'#ccc'}">★</span>`).join(''); $('rv-stars').querySelectorAll('[data-s]').forEach(s=>s.onclick=()=>{ rating=Number(s.dataset.s); draw(); }); }; draw();
  $('rv-go').onclick=async()=>{ if(a.status!=='completed'){ toast('Review sirf completed appointment ke baad'); return; } state.reviews.push({id:a.id,apptId:a.id,doctorId:doc.id,patientPhoneE164:e164(session.phone),patientName:a.patientName,rating,text:esc($('rv-t').value.trim()),hidden:false,reported:false,date:todayStr()}); await saveState(); closeModal(); toast('Thank you!'); renderMyPortal(); };
}
/* ---- doctor: review moderation (hide / report) ---- */
function reviewsCardHtml(doc){
  const rs=state.reviews.filter(r=>r.doctorId===doc.id).sort((a,b)=>(b.date||'').localeCompare(a.date||'')), rt=docRatingStats(doc.id);
  return `<div class="card mt"><div class="section-label">Patient reviews${rt.count?` — ${starsDisplay(rt.avg)} ${rt.avg} (${rt.count})`:''}</div>${rs.length?rs.map(r=>`<div class="appt-row"><div class="appt-info"><div class="nm">${starsDisplay(r.rating)} ${r.patientName||''} ${r.hidden?'<span class="status-badge st-inactive">Hidden</span>':''} ${r.reported?'<span class="status-badge st-expiring">Reported</span>':''}</div><div class="ph">${r.text||'—'}</div></div><button class="btn btn-outline btn-sm" data-rvhide="${r.id}">${r.hidden?'Show':'Hide'}</button>${r.reported?'':`<button class="btn btn-ghost btn-sm" data-rvrep="${r.id}">Report</button>`}</div>`).join(''):'<div class="muted">Abhi koi review nahi. Review sirf completed appointment ke baad, OTP verify karke aata hai.</div>'}</div>`;
}
function bindReviewsCard(el){
  el.querySelectorAll('[data-rvhide]').forEach(b=>b.onclick=async()=>{ const r=state.reviews.find(x=>x.id===b.dataset.rvhide); r.hidden=!r.hidden; await saveState(); renderAdmin(); });
  el.querySelectorAll('[data-rvrep]').forEach(b=>b.onclick=async()=>{ const r=state.reviews.find(x=>x.id===b.dataset.rvrep); r.reported=true; r.hidden=true; await saveState(); renderAdmin(); toast('Review reported aur hide kar diya gaya'); });
}

/* ================= NOTIFICATION SERVICE LAYER (providers plug in later — nothing is faked) ================= */
const Notify = {
  channels:['whatsapp','sms','email'], providers:{}, log:[],
  register(channel,fn){ this.providers[channel]=fn; },
  template(event,doc,a){
    const d=unesc(doc.name), when=a&&a.date?niceDate(a.date)+', '+fmt12(a.time):'', tok=a&&a.tokenNo?tokenLabel(a.tokenNo):'';
    return { booking:`Appointment confirmed with ${d} on ${when}. Token ${tok}. Details: ${apptUrl(doc.slug,apptKey(a))}`, reminder:`Reminder: appointment with ${d} on ${when}, Token ${tok}.`, cancellation:`Your appointment with ${d} on ${when} has been cancelled.`,
      reschedule:`Your appointment with ${d} is now on ${when}. Token ${tok}.`, payment:`Payment of ₹${a&&a.fee} received for your appointment with ${d}. Thank you.`, waitlist_joined:`You are on the waitlist for ${d}. The clinic will contact you if a slot opens.`, waitlist_available:`A slot is available with ${d}. Book: ${publicUrl(doc.slug)}` }[event]||'';
  },
  async trigger(event,doc,a){
    const text=this.template(event,doc,a), sent=[];
    for(const ch of this.channels){ const fn=this.providers[ch]; const job={id:uid(),event,channel:ch,to:a&&(a.patientPhone||''),text,at:new Date().toISOString(),status:fn?'sending':'not_sent_no_provider'}; this.log.push(job); if(fn){ try{ await fn(job); job.status='sent'; }catch(e){ job.status='failed'; job.error=String(e&&e.message||e); } } sent.push(job); }
    if(this.log.length>200) this.log.splice(0,this.log.length-200); return sent;
  }
};
window.Notify=Notify;

/* ================= API LAYER (same contract the future AI voice agent will call via secure Cloud Functions) ================= */
const AppointoApi = {
  _doc(p){ return p.doctorId?docById(p.doctorId):docBySlug(p.slug); },
  async getDoctor(p){ const d=this._doc(p); if(!d||d.deleted) return {ok:false,error:'not_found'}; return {ok:true,doctor:{id:d.id,name:unesc(d.name),specialty:d.spec,experienceYears:d.exp,clinic:unesc(d.clinicName||''),address:unesc(d.clinicAddress||''),fee:d.fee,bookingOpen:!bookingClosedReason(d,state.platform.public)}}; },
  async getClinicSettings(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const s=Object.assign(defaultSettings(),d.settings||{}), sc=docSchedule(d); return {ok:true,settings:{advanceDays:s.advanceDays,sameDay:s.sameDay,allowCancel:s.allowCancel,allowReschedule:s.allowReschedule,waitlist:s.waitlist,slotMinutes:sc.slotMinutes,maxPerDay:sc.maxPerDay,workingDays:Object.keys(sc.days).filter(k=>sc.days[k].enabled).map(Number)}}; },
  async getAvailability(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const r=bookingClosedReason(d,state.platform.public); if(r) return {ok:false,error:r}; const usage=await Backend.getSlotUsage(d.id,p.date), av=computeAvailability(d,p.date,usage); return {ok:true,date:p.date,closed:av.closed,reason:av.reason||null,slots:av.slots.filter(s=>s.free).map(s=>s.time)}; },
  async bookAppointment(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const pt=p.patient||{}; if(!pt.name||!validPhone(pt.phone)) return {ok:false,error:'invalid_patient'};
    try{ const a=await Backend.bookAppointment({doctorId:d.id,date:p.date,time:p.time,source:p.source||'ai_agent',patient:{name:pt.name,phone:pt.phone,age:pt.age,gender:pt.gender,reason:pt.reason||''}}); return {ok:true,appointment:{id:a.id,code:apptCode(a.id),date:a.date,time:a.time,token:a.tokenNo}}; }catch(e){ return {ok:false,error:e.code||'failed',message:e.message}; } },
  async cancelAppointment(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const a=await Backend.getAppointment(d.id,p.appointmentId); if(!a||(p.phone&&a.patientPhone!==normPhone(p.phone))) return {ok:false,error:'not_found'}; try{ await Backend.cancelAppointment(d.id,a.id,'ai_agent'); return {ok:true}; }catch(e){ return {ok:false,error:e.code||'failed'}; } },
  async rescheduleAppointment(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const a=await Backend.getAppointment(d.id,p.appointmentId); if(!a||(p.phone&&a.patientPhone!==normPhone(p.phone))) return {ok:false,error:'not_found'}; try{ await Backend.rescheduleAppointment(d.id,a.id,p.date,p.time,'patient'); return {ok:true,appointment:{id:a.id,date:p.date,time:p.time}}; }catch(e){ return {ok:false,error:e.code||'failed'}; } },
  async getAppointment(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const a=await Backend.getAppointment(d.id,p.appointmentId); if(!a) return {ok:false,error:'not_found'}; return {ok:true,appointment:{id:a.id,code:apptCode(a.id),date:a.date,time:a.time,token:a.tokenNo,status:migrateStatus(a.status)}}; },
  async getPatient(p){ const d=this._doc(p); if(!d) return {ok:false,error:'not_found'}; const pt=state.patients.find(x=>x.doctorId===d.id&&x.phone===normPhone(p.phone)); return pt?{ok:true,patient:{id:pt.pid,name:unesc(pt.name),phone:pt.phone}}:{ok:false,error:'not_found'}; },
  async createPatient(p){ const d=this._doc(p); if(!d||!p.name||!validPhone(p.phone)) return {ok:false,error:'invalid'}; const ph=normPhone(p.phone); let pt=state.patients.find(x=>x.doctorId===d.id&&x.phone===ph); if(!pt){ pt={id:uid(),doctorId:d.id,pid:'P'+String(state.patients.filter(x=>x.doctorId===d.id).length+1).padStart(4,'0'),phone:ph,name:esc(p.name),age:p.age||'',gender:p.gender||'',notes:[],createdAt:new Date().toISOString()}; state.patients.push(pt); await saveState(); } return {ok:true,patient:{id:pt.pid,name:unesc(pt.name),phone:pt.phone}}; },
};
window.AppointoApi=AppointoApi;

/* ================= INIT ================= */
async function init(){
  initTheme(); adoptPathRoute();
  try{ await Backend.init(); }
  catch(e){ console.error(e); $('root').innerHTML=`<div style="padding:60px 20px;text-align:center;"><h3>App start nahi ho paya</h3><div class="muted" style="margin-top:8px;">${esc(e.message||'')}</div><button class="btn btn-coral mt" onclick="location.reload()">Retry</button></div>`; return; }
  await enterRoute();
}
/* Safety net: a bug in any one screen/button should show a small message, not freeze
   or blank the whole app. This does not replace fixing the actual bug, but it stops
   one mistake from taking down every doctor using the app at once. */
window.addEventListener('error', function(ev){
  console.error('Uncaught error', ev.error||ev.message);
  try{ toast('Kuch gadbad hui — dobara try karein'); }catch(e){}
});
window.addEventListener('unhandledrejection', function(ev){
  console.error('Unhandled promise rejection', ev.reason);
  try{ toast('Kuch gadbad hui — dobara try karein'); }catch(e){}
});
init();
