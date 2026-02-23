"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactSchema = z.object({
	name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
	email: z.string().email("Email inválido"),
	phone: z.string().min(10, "Telefone inválido"),
	company: z.string().optional(),
	message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({ className }: { className?: string }) {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (_data: ContactFormData) => {
		setIsSubmitting(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		toast.success("Mensagem enviada!", {
			description: "Entraremos em contato em breve.",
		});

		reset();
		setIsSubmitting(false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<Label htmlFor="name">Nome *</Label>
					<Input id="name" placeholder="Seu nome completo" {...register("name")} />
					{errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">Email *</Label>
					<Input id="email" type="email" placeholder="seu@email.com" {...register("email")} />
					{errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<Label htmlFor="phone">Telefone/WhatsApp *</Label>
					<Input id="phone" placeholder="(11) 99999-9999" {...register("phone")} />
					{errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
				</div>

				<div className="space-y-2">
					<Label htmlFor="company">Empresa (Opcional)</Label>
					<Input id="company" placeholder="Nome da sua empresa" {...register("company")} />
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="message">Como podemos ajudar? *</Label>
				<Textarea
					id="message"
					placeholder="Conte um pouco sobre seu projeto ou desafio..."
					className="min-h-[150px]"
					{...register("message")}
				/>
				{errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
			</div>

			<Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
				{isSubmitting ? "Enviando..." : "Enviar Mensagem"}
			</Button>
		</form>
	);
}
