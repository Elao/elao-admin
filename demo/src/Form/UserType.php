<?php

namespace App\Form;

use App\Model\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, ['label' => 'user.name'])
            ->add('email', EmailType::class, ['label' => 'user.email'])
            ->add('premiumUntil', DateType::class, [
                'widget' => 'single_text',
                'label' => 'user.premiumUntil',
            ])
            ->add('enabled', CheckboxType::class, ['label' => 'user.enabled'])
            ->add('country', CountryType::class, [
                'attr' => [
                    'data-choice' => true,
                    'data-choice-options' => json_encode(['maxOptions' => null]),
                ],
                'label' => 'user.country',
                'mapped' => false,
            ])
            ->add('role', ChoiceType::class, [
                'choices'  => [
                    'role.ROLE_USER' => 'ROLE_USER',
                    'role.ROLE_STAFF' => 'ROLE_STAFF',
                    'role.ROLE_ADMIN' => 'ROLE_ADMIN',
                ],
                'label' => 'user.role',
                'attr' => [
                    'data-choice' => true
                ],
            ])
            ->add('role2', ChoiceType::class, [
                'choices'  => [
                    'role.ROLE_USER' => 'ROLE_USER',
                    'role.ROLE_STAFF' => 'ROLE_STAFF',
                    'role.ROLE_ADMIN' => 'ROLE_ADMIN',
                ],
                'label' => 'user.role',
                'multiple' => true,
                'attr' => [
                    'data-choice' => true
                ],
                'mapped' => false,
            ])
            ->add('save', SubmitType::class, ['label' => 'form.save'])
        ;
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
