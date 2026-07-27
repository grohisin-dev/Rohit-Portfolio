const platformMetrics = [
  ["Pipeline runtime", "75%", "manual TCM work removed"],
  ["Alert creation", "80%", "faster billing prep"],
  ["Domain coverage", "4+", "years in analytics engineering"],
  ["Credentials", "6", "cloud and data certifications"],
];

const pipelineNodes = [
  { label: "ADT", kind: "source", status: "live" },
  { label: "Claims", kind: "source", status: "live" },
  { label: "Eligibility", kind: "source", status: "live" },
  { label: "FHIR", kind: "source", status: "build" },
  { label: "Snowflake", kind: "warehouse", status: "core" },
  { label: "dbt", kind: "model", status: "tested" },
  { label: "Quality", kind: "check", status: "monitored" },
  { label: "BI", kind: "serve", status: "served" },
];

const systems = [
  {
    name: "Transitional Care Management Engine",
    owner: "Oasis Health Partners",
    outcome: "Reduced manual processing by 75% across ADT intake, patient identification, engagement, and billing support.",
    inputs: "ADT feeds, eligibility, provider, patient engagement",
    stack: "AWS, Snowflake, dbt, HubSpot, Sigma, Python",
  },
  {
    name: "Healthcare Claims Lakehouse",
    owner: "Healthcare analytics case study",
    outcome: "Built cost-of-care models for PMPM analysis, readmission tracking, emergency utilization, and chronic burden reporting.",
    inputs: "Medical claims, pharmacy claims, eligibility, contracts",
    stack: "Snowflake, dbt, Python, AWS, SQL",
  },
  {
    name: "FHIR Clinical Quality Layer",
    owner: "Clinical integration case study",
    outcome: "Mapped clinical resources into governed quality models for care gaps, screenings, condition monitoring, and provider performance.",
    inputs: "Patient, Encounter, Condition, Observation, Medication",
    stack: "FHIR, REST APIs, Snowflake, dbt, Power BI",
  },
];

const experience = [
  ["2025 - Present", "Senior Analytics Engineer", "Oasis Health Partners", "Healthcare analytics engineering, value-based care, TCM automation"],
  ["2024 - 2025", "Data Analytics & Engineering Associate", "Ideal Industries", "Azure ETL, Snowflake reporting models, reconciliation controls"],
  ["2023 - 2024", "Analytics Consultant", "Cancer Wellness Center", "Power BI semantic models, KPI governance, executive reporting"],
  ["2022 - 2023", "CAP Data Analyst", "Amazon Development Center", "Trust analytics, Redshift pipelines, QuickSight monitoring"],
];

const stackGroups = [
  ["Languages", "SQL", "Python", "JavaScript", "Scala", "Bash"],
  ["Warehouses", "Snowflake", "Redshift", "PostgreSQL", "SQL Server", "Azure SQL"],
  ["Cloud", "AWS S3", "Glue", "Lambda", "Step Functions", "Azure Data Factory"],
  ["Modeling", "dbt", "Semantic models", "Dimensional models", "Feature validation", "Reconciliation"],
  ["Activation", "Sigma", "Power BI", "Tableau", "QuickSight", "HubSpot"],
];

const certifications = [
  "AWS Certified Data Engineer - Associate",
  "Microsoft Fabric Data Engineer Associate - DP-700",
  "SnowPro Core Certification",
  "dbt Analytics Engineering Certification",
  "Microsoft Azure Data Fundamentals - DP-900",
  "AWS Certified AI Practitioner",
];

export default function Home() {
  return (
    <main className="platform-page">
      <aside className="side-rail" aria-label="Portfolio navigation">
        <a className="rail-logo" href="#overview">RS</a>
        <nav>
          <a href="#systems">Systems</a>
          <a href="#experience">Runs</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>

      <section className="top-command" id="overview">
        <div className="command-copy">
          <p className="mono-label">data_platform.owner</p>
          <h1>Rohit Singh</h1>
          <p>
            Senior Analytics Engineer building production-grade data systems for
            healthcare, operations, compliance, and executive decision support.
          </p>
        </div>
        <div className="profile-console" aria-label="Profile snapshot">
          <img src="/rohit-avatar.png" alt="Stylized avatar of Rohit Singh" />
          <div>
            <span>Current focus</span>
            <strong>Claims, ADT, FHIR, care management, cost-of-care models</strong>
          </div>
        </div>
      </section>

      <section className="ops-grid" aria-label="Data engineering overview">
        <div className="lineage-panel">
          <div className="panel-head">
            <span>lineage.yml</span>
            <strong>Source to insight map</strong>
          </div>
          <div className="lineage-map">
            {pipelineNodes.map((node) => (
              <div className={`pipeline-node ${node.kind}`} key={node.label}>
                <span>{node.kind}</span>
                <strong>{node.label}</strong>
                <small>{node.status}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="metrics-panel">
          <div className="panel-head">
            <span>impact.log</span>
            <strong>Measured outcomes</strong>
          </div>
          <div className="metric-stack">
            {platformMetrics.map(([label, value, note]) => (
              <div className="metric-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{note}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="systems-section" id="systems">
        <div className="section-title">
          <p className="mono-label">selected_systems</p>
          <h2>Projects written like systems you could hand to a data team.</h2>
        </div>

        <div className="system-table">
          {systems.map((system, index) => (
            <article className="system-row" key={system.name}>
              <div className="system-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="system-name">
                <span>{system.owner}</span>
                <h3>{system.name}</h3>
              </div>
              <div className="system-detail">
                <p>{system.outcome}</p>
                <dl>
                  <div>
                    <dt>Inputs</dt>
                    <dd>{system.inputs}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{system.stack}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-title">
          <p className="mono-label">run_history</p>
          <h2>Work history as shipped data products.</h2>
        </div>
        <div className="run-list">
          {experience.map(([date, role, company, scope]) => (
            <article key={`${date}-${company}`}>
              <span>{date}</span>
              <h3>{role}</h3>
              <strong>{company}</strong>
              <p>{scope}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="section-title">
          <p className="mono-label">warehouse_toolkit</p>
          <h2>Tools grouped by where they sit in the pipeline.</h2>
        </div>
        <div className="stack-matrix">
          {stackGroups.map(([group, ...items]) => (
            <article key={group}>
              <h3>{group}</h3>
              <div>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cert-section" aria-label="Certifications">
        <p className="mono-label">certifications</p>
        <div>
          {certifications.map((cert) => (
            <span key={cert}>{cert}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="mono-label">ready_for_next_run</p>
          <h2>Need someone who can model the business and engineer the data?</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:singhhrohit.data@gmail.com">Email Rohit</a>
          <a href="https://github.com/grohisin-dev" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
