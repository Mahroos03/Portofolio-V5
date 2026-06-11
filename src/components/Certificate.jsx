import React, { useState } from "react";
import { Modal, IconButton, Backdrop, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowRight, ExternalLink } from "lucide-react";

const CertificateArtwork = ({ certificate, compact = false }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      minHeight: compact ? 190 : { xs: 420, sm: 540 },
      aspectRatio: compact ? "16 / 9" : "4 / 3",
      p: compact ? 2 : { xs: 3, sm: 5 },
      borderRadius: compact ? 2 : 4,
      overflow: "hidden",
      bgcolor: "#f8fafc",
      color: "#0f172a",
      border: "1px solid rgba(148,163,184,0.3)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7)",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at top right, rgba(191,219,254,0.55), transparent 26%), radial-gradient(circle at bottom left, rgba(253,224,71,0.18), transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,1))",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        inset: compact ? 10 : 14,
        border: "1px solid rgba(148,163,184,0.2)",
        borderRadius: compact ? 2 : 3,
        pointerEvents: "none",
      }}
    />

    <Box sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
      {certificate.variant === "cisco-python-essentials" ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center", gap: compact ? 1.5 : 2, justifyContent: "flex-start" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ fontWeight: 900, letterSpacing: 1, color: "#111827", fontSize: compact ? "0.9rem" : "1rem" }}>CISCO</Box>
              <Box sx={{ width: 1, height: compact ? 26 : 34, bgcolor: "#cbd5e1" }} />
              <Box>
                <Typography sx={{ color: "#38bdf8", fontWeight: 500, lineHeight: 1, fontSize: compact ? "0.9rem" : "1rem" }}>Networking</Typography>
                <Typography sx={{ color: "#38bdf8", fontWeight: 500, lineHeight: 1, fontSize: compact ? "0.9rem" : "1rem" }}>Academy</Typography>
              </Box>
            </Box>
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ fontWeight: 900, color: "#111827", fontSize: compact ? "1rem" : "1.2rem" }}>Python</Box>
              <Box sx={{ px: 1, py: 0.3, borderRadius: 1, bgcolor: "#2563eb", color: "white", fontWeight: 800, fontSize: compact ? "0.7rem" : "0.8rem" }}>PI</Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", py: compact ? 2 : 3 }}>
            <Typography sx={{ color: "#3f3f46", mb: 1, fontSize: compact ? "0.85rem" : "1rem" }}>This certificate is awarded to</Typography>
            <Typography sx={{ fontWeight: 900, color: "#0f5bb5", lineHeight: 1.05, mb: 1.5, fontSize: compact ? "1.8rem" : "3rem" }}>
              {certificate.name || "Mhmd Mahroos"}
            </Typography>
            <Typography sx={{ color: "#3f3f46", mb: 1, fontSize: compact ? "0.85rem" : "1rem" }}>for successfully completing</Typography>
            <Typography sx={{ fontWeight: 900, color: "#0f5bb5", lineHeight: 1.05, mb: 1.2, fontSize: compact ? "1.3rem" : "2.2rem" }}>
              {certificate.title || "Python Essentials 1"}
            </Typography>
            <Typography sx={{ color: "#3f3f46", fontSize: compact ? "0.82rem" : "1rem" }}>
              offered by {certificate.issuer || "Networking Academy"}
            </Typography>
            <Typography sx={{ color: "#3f3f46", fontSize: compact ? "0.82rem" : "1rem" }}>
              through the {certificate.organization || "Cisco Networking Academy"} program.
            </Typography>
          </Box>

          <Box sx={{ mt: "auto", pt: compact ? 2 : 3, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 2 }}>
            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ width: compact ? 130 : 170, borderTop: "1px solid rgba(15,23,42,0.22)", pt: 1.2 }}>
                <Typography sx={{ fontFamily: "cursive", fontSize: compact ? "1rem" : "1.35rem", color: "#0f172a", lineHeight: 1 }}>
                  Lynn Bloomer
                </Typography>
                <Typography variant="caption" sx={{ display: "block", color: "#475569" }}>
                  Director
                </Typography>
                <Typography variant="caption" sx={{ display: "block", color: "#475569" }}>
                  Cisco Networking Academy
                </Typography>
              </Box>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: compact ? "0.9rem" : "1.05rem" }}>
                {certificate.date || "17 Aug 2025"}
              </Typography>
              <Typography variant="caption" sx={{ color: "#475569" }}>
                Completion Date
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
            <Box>
              <Typography variant={compact ? "caption" : "overline"} sx={{ letterSpacing: 2.4, color: "#64748b" }}>
                CERTIFICATE
              </Typography>
              <Typography variant={compact ? "h6" : "h5"} sx={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.1, mt: 0.4 }}>
                {certificate.organization || certificate.issuer || "Certificate"}
              </Typography>
            </Box>

            <Box
              sx={{
                width: compact ? 42 : 56,
                height: compact ? 42 : 56,
                borderRadius: "50%",
                border: "1px solid rgba(148,163,184,0.35)",
                bgcolor: "rgba(255,255,255,0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
                flexShrink: 0,
              }}
            >
              <Box sx={{ width: compact ? 20 : 28, height: compact ? 20 : 28, borderRadius: "50%", bgcolor: "#cbd5e1" }} />
            </Box>
          </Box>

          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", py: compact ? 2 : 4 }}>
            <Typography variant={compact ? "body2" : "body1"} sx={{ color: "#475569", mb: 1 }}>
              This certificate is awarded to
            </Typography>
            <Typography variant={compact ? "h4" : "h2"} sx={{ fontWeight: 900, color: "#0f172a", lineHeight: 1.05, mb: 1.5 }}>
              {certificate.name || "Recipient"}
            </Typography>
            <Typography variant={compact ? "body2" : "body1"} sx={{ color: "#475569", maxWidth: 760, mx: "auto" }}>
              has successfully completed the course by demonstrating theoretical and practical understanding of
            </Typography>
            <Typography variant={compact ? "h6" : "h4"} sx={{ fontWeight: 800, color: "#1d4ed8", mt: 1 }}>
              {certificate.title || "Certificate"}
            </Typography>
            {certificate.code ? (
              <Typography variant="caption" sx={{ mt: 1.2, color: "#64748b", letterSpacing: 0.6 }}>
                Certificate {certificate.code}
              </Typography>
            ) : null}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 2, mt: "auto" }}>
            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ width: compact ? 140 : 180, borderTop: "1px solid rgba(15,23,42,0.28)", pt: 1.1 }}>
                <Typography variant="body2" sx={{ fontFamily: "cursive", fontSize: compact ? "1.05rem" : "1.2rem", color: "#0f172a" }}>
                  Yeva Hyusyan
                </Typography>
                <Typography variant="caption" sx={{ display: "block", color: "#64748b" }}>
                  Chief Executive Officer
                </Typography>
              </Box>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#0f172a" }}>
                {certificate.date || "Issued Date"}
              </Typography>
              <Typography variant="caption" sx={{ color: "#64748b" }}>
                Completion Date
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  </Box>
);

const Certificate = ({ certificate = {}, ImgSertif }) => {
  const [open, setOpen] = useState(false);
  const hasImage = Boolean(ImgSertif || certificate?.Img);
  const imageSrc = ImgSertif || certificate?.Img;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={handleOpen}>
            {hasImage ? (
              <img
                src={imageSrc}
                alt={certificate.title || "Certificate"}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <CertificateArtwork certificate={certificate} compact />
            )}
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {certificate.title || "Certificate"}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {certificate.description || `Issued to ${certificate.name || "the recipient"} by ${certificate.organization || certificate.issuer || "the provider"}.`}
            </p>

            <div className="pt-4 flex items-center justify-between gap-3">
              {certificate.verifyUrl ? (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Verify</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">View</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span className="text-sm font-medium">Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(5px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "94vw",
            maxHeight: "92vh",
            m: 0,
            p: 0,
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              padding: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
                transform: "scale(1.1)",
              },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {hasImage ? (
            <img
              src={imageSrc}
              alt={certificate.title || "Certificate"}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "92vh",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
          ) : (
            <Box sx={{ width: { xs: "94vw", sm: "980px" }, maxWidth: "94vw" }}>
              <CertificateArtwork certificate={certificate} />
              {certificate.verifyUrl ? (
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      bgcolor: "#7c3aed",
                      "&:hover": { bgcolor: "#6d28d9" },
                    }}
                  >
                    Verify Certificate
                  </Button>
                </Box>
              ) : null}
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Certificate;
