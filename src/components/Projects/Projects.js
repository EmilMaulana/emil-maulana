import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import osis from "../../Assets/Projects/osis.png";
import blog from "../../Assets/Projects/blogs.png";
import alumni from "../../Assets/Projects/alumni.png";
import fase from "../../Assets/Projects/fase.png";
import confess from "../../Assets/Projects/confess.png";
import ppdb from "../../Assets/Projects/ppdb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fase}
              isBlog={false}
              title="FASE WILAYAH-XIII"
              description="Ini adalah web pendaftaran peserta kegiatan FASE Forum OSIS Jawa Barat Wilayah-XIII."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://fase-wilayah-13.teknikrekayasa.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppdb}
              isBlog={false}
              title="PPDB SMKN 1 KAWALI"
              description="Website ini digunakan untuk informasi PPDB dan Pengumuman Diterima/Tidak diterima Di Sekolah."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://ppdb.teknikrekayasa.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Alumni K-ONE"
              description="Website ini digunakan untuk pendataan alumni, berbagi cerita alumni dan sarana informasi seputar alumni."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://alumni.teknikrekayasa.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osis}
              isBlog={false}
              title="Sistem Informasi OSIS"
              description="Website ini dirancang untuk menangani administrasi, pendataan anggota, pendataan kehadiran, informasi, penjadwalan kegiatan, profil organisasi, dan pencatatan keuangan organisasi."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://osis.teknikrekaysa.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={confess}
              isBlog={false}
              title="K-Onefess"
              description="Website ini kerap dipakai oleh siswa sebagai platform untuk mengirim pesan rahasia secara anonim, pembuatan website ini terinspirasi dari trend tiktok yang sempat viral mengenai Menfess."
              demoLink="https://onefess.teknikrekayasa.com" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog CMS"
              description="Website ini saya buat pada saat saya melaksanakan kegiatan Praktik Kerja Lapangan dan menjadi web pertama yang saya buat. Blog sistem ini sudah dilengkapi dengan menu Create, Read, Update, Delete (CRUD)."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://teknikrekayasa.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
