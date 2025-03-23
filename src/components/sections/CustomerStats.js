import Image from "next/image"; // Import your data
import { COMPANY_INFO } from "../common/constant";

export default function CustomerStats() {
  return (
    <div className="customer-stats">
      {/* Profile Images */}
      <div className="customer-avatars">
        {COMPANY_INFO.clients.map((client, index) =>
          client.isCount ? (
            <div key={index} className="avatar more">+50k</div>
          ) : (
            <Image
              key={index}
              src={client.image}
              alt={client.name}
              width={50}
              height={50}
              className="avatar"
            />
          )
        )}
      </div>

      {/* Stats Section */}
      <div className="stats-text">
        <p className="stats-number">100k+</p>
        <p className="stats-label">Satisfied customers</p>
      </div>
    </div>
  );
}
