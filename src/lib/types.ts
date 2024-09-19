export type BaseAccordionProps = {
	somePropA?: string;
	somePropB?: string;
};

export type SingleAccordionProps = {
	type: 'single';
	value?: string;
};

export type MultiAccordionProps = {
	type: 'multiple';
	value?: string[];
};

export type AccordionProps = BaseAccordionProps & (SingleAccordionProps | MultiAccordionProps);
