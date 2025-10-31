// function Timepass() {
//   const handleDownload = async (e) => {
//     e.preventDefault(); // stop default link behavior

//     const filePath = "/margin.pdf";

//     try {
//       const response = await fetch(filePath);

//       if (!response.ok) {
//         alert("File not found in public folder!");
//         return;
//       }

//       const blob = await response.blob();

//       // Check MIME type & file signature
//       const isPDF = blob.type === "application/pdf";

//       const buffer = await blob.arrayBuffer();
//       const header = new Uint8Array(buffer).slice(0, 5);
//       const headerText = new TextDecoder().decode(header);

//       if (!isPDF || headerText !== "%PDF-") {
//         alert("The file is not a valid PDF or is corrupted!");
//         return;
//       }

//       // ✅ Valid PDF → download
//       const link = document.createElement("a");
//       link.href = filePath;
//       link.download = "sunnyResume.pdf";
//       link.click();
//     } catch (err) {
//       alert("Error verifying file!");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <a
//         href="/sunnyResume.pdf"
//         download="sunnyResume"
//         onClick={handleDownload}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
//       >
//         Download
//       </a>
//     </div>
//   );
// }

// // export default Timepass;
// function ContactGmail() {
//   const handleMail = () => {
//     window.open(
//       "https://mail.google.com/mail/?view=cm&fs=1&to=developer@example.com",
//       "_blank"
//     );
//   };

//   return (
//     <button
//       onClick={handleMail}
//       style={{
//         padding: "10px 20px",
//         background: "#EA4335",
//         color: "white",
//         borderRadius: "6px",
//         cursor: "pointer",
//       }}
//     >
//       Mail via Gmail
//     </button>
//   );
// }

// export default ContactGmail;
