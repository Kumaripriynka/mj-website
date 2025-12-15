import React from 'react';

const PoliciesNote = ({ isDarkBg = false }) => {
   return (
      <div style={{
         background: isDarkBg 
            ? 'linear-gradient(135deg, rgba(194, 145, 61, 0.15) 0%, rgba(26, 58, 58, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(194, 145, 61, 0.08) 0%, rgba(26, 58, 58, 0.12) 100%)',
         border: `2px solid rgba(194, 145, 61, ${isDarkBg ? '0.4' : '0.25'})`,
         borderRadius: '12px',
         padding: '40px 35px',
         marginTop: '50px',
         marginBottom: '50px',
         backdropFilter: 'blur(10px)',
         position: 'relative',
         overflow: 'hidden'
      }}>
         {/* Decorative corner accent */}
         <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100px',
            background: `radial-gradient(circle, rgba(194, 145, 61, ${isDarkBg ? '0.15' : '0.08'}) 0%, transparent 70%)`,
            borderRadius: '0 0 0 50px'
         }}></div>

         <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Note Label */}
            <div style={{
               display: 'flex',
               alignItems: 'center',
               marginBottom: '25px'
            }}>
               <i className="fas fa-info-circle" style={{
                  color: '#C2913D',
                  fontSize: '24px',
                  marginRight: '15px'
               }}></i>
               <h3 style={{
                  color: '#C2913D',
                  fontSize: '22px',
                  fontWeight: '700',
                  margin: 0,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
               }}>Important Note</h3>
            </div>

            {/* Divider */}
            <div style={{
               height: '2px',
               background: 'linear-gradient(90deg, #C2913D 0%, transparent 100%)',
               marginBottom: '25px'
            }}></div>

            {/* Policies Content */}
            <div style={{
               display: 'grid',
               gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
               gap: '30px'
            }}>
               {/* Wheelchair Access */}
               <div style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '20px',
                  background: isDarkBg 
                     ? 'rgba(194, 145, 61, 0.08)'
                     : 'rgba(194, 145, 61, 0.03)',
                  borderRadius: '10px',
                  border: `1px solid rgba(194, 145, 61, ${isDarkBg ? '0.25' : '0.15'})`,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(194, 145, 61, ${isDarkBg ? '0.15' : '0.08'})`;
                  e.currentTarget.style.borderColor = 'rgba(194, 145, 61, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDarkBg 
                     ? 'rgba(194, 145, 61, 0.08)'
                     : 'rgba(194, 145, 61, 0.03)';
                  e.currentTarget.style.borderColor = `rgba(194, 145, 61, ${isDarkBg ? '0.25' : '0.15'})`;
                  e.currentTarget.style.transform = 'translateY(0)';
               }}>
                  <div style={{
                     width: '50px',
                     height: '50px',
                     minWidth: '50px',
                     background: `rgba(194, 145, 61, ${isDarkBg ? '0.2' : '0.1'})`,
                     borderRadius: '10px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                  }}>
                     <i className="fas fa-wheelchair" style={{
                        color: '#C2913D',
                        fontSize: '24px'
                     }}></i>
                  </div>
                  <div>
                     <h4 style={{
                        color: '#C2913D',
                        fontSize: '16px',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                        textTransform: 'uppercase'
                     }}>Wheelchair Accessible</h4>
                     <p style={{
                        color: isDarkBg ? '#D8DBDC' : '#555',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        margin: 0
                     }}>Fully wheelchair accessible and friendly for special abled persons. Dedicated facilities and support services available.</p>
                  </div>
               </div>

               {/* Pet Policy */}
               <div style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '20px',
                  background: isDarkBg 
                     ? 'rgba(194, 145, 61, 0.08)'
                     : 'rgba(194, 145, 61, 0.03)',
                  borderRadius: '10px',
                  border: `1px solid rgba(194, 145, 61, ${isDarkBg ? '0.25' : '0.15'})`,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(194, 145, 61, ${isDarkBg ? '0.15' : '0.08'})`;
                  e.currentTarget.style.borderColor = 'rgba(194, 145, 61, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDarkBg 
                     ? 'rgba(194, 145, 61, 0.08)'
                     : 'rgba(194, 145, 61, 0.03)';
                  e.currentTarget.style.borderColor = `rgba(194, 145, 61, ${isDarkBg ? '0.25' : '0.15'})`;
                  e.currentTarget.style.transform = 'translateY(0)';
               }}>
                  <div style={{
                     width: '50px',
                     height: '50px',
                     minWidth: '50px',
                     background: `rgba(194, 145, 61, ${isDarkBg ? '0.2' : '0.1'})`,
                     borderRadius: '10px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                  }}>
                     <i className="fas fa-ban" style={{
                        color: '#C2913D',
                        fontSize: '24px'
                     }}></i>
                  </div>
                  <div>
                     <h4 style={{
                        color: '#C2913D',
                        fontSize: '16px',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                        textTransform: 'uppercase'
                     }}>Pet Not Allowed</h4>
                     <p style={{
                        color: isDarkBg ? '#D8DBDC' : '#555',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        margin: 0
                     }}>To maintain high standards of hygiene and comfort for all guests, pets are not permitted on the premises.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PoliciesNote;
