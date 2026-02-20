import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhatsAppButton } from "../WhatsAppButton";

describe("WhatsAppButton", () => {
  it("renderiza o link para WhatsApp", () => {
    render(<WhatsAppButton />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("contém o aria-label correto", () => {
    render(<WhatsAppButton />);
    const links = screen.getAllByLabelText(
      /falar com a multi br pelo whatsapp/i,
    );
    expect(links.length).toBeGreaterThan(0);
  });

  it("tem o href correto com wa.me e número real", () => {
    render(<WhatsAppButton />);
    const links = screen.getAllByRole("link") as HTMLAnchorElement[];
    const whatsappLink = links.find((l) =>
      l.href?.includes("wa.me/5521969715247"),
    );
    expect(whatsappLink).toBeDefined();
  });

  it("abre em nova aba com rel seguro", () => {
    render(<WhatsAppButton />);
    const links = screen.getAllByRole("link") as HTMLAnchorElement[];
    const whatsappLink = links.find((l) => l.href?.includes("wa.me"));
    expect(whatsappLink?.target).toBe("_blank");
    expect(whatsappLink?.rel).toContain("noopener");
  });
});
