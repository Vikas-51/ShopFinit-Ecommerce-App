import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import blog1 from "../../assets/blogs/blog-1.jpg";
import blog2 from "../../assets/blogs/blog-2.jpg";
import blog3 from "../../assets/blogs/blog-3.jpg";

const blogs = [
  { id: 1, title: "Latest Tech Trends", image: blog1 },
  { id: 2, title: "Gadget Reviews", image: blog2 },
  { id: 3, title: "Buying Guides", image: blog3 },
];

const Blogs = () => {
  return (
    <section className="py-5 bg-light" id="blogs">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">
          Latest Blogs
        </h2>
        <Row className="g-4">
          {blogs.map((blog) => (
            <Col md={4} key={blog.id} data-aos="fade-up">
              <Card
                className="h-100 border-0 shadow-lg blog-card"
                style={{ borderRadius: "20px", overflow: "hidden", transition: "transform 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{blog.title}</Card.Title>
                  <Card.Text className="text-muted">
                    🚀 Your one-stop hub for smarter tech decisions.
                        Stay updated. Stay informed. Shop wisely.
                        Discover insights and reviews in our latest blog entries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
